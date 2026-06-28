const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order');
const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = require('../config/env');

const router = express.Router();

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET
});

function computeExpectedSignature({ order_id, payment_id }, secret){
  const payload = `${order_id}|${payment_id}`;
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

router.post('/create-order', async (req, res) => {
  try {
    const {
      amount,
      currency = 'INR',
      receipt,
      orderId,
      items = [],
      address = {},
      paymentMethod = 'unknown',
      totals = {},
      couponCode
    } = req.body || {};

    const totalAmount = Number(amount);
    if (!orderId) return res.status(400).json({ success: false, message: 'orderId is required' });
    if (!Number.isFinite(totalAmount) || totalAmount <= 0) {
      return res.status(400).json({ success: false, message: 'amount must be a positive number' });
    }

    // Convert paise
    const amountPaise = Math.round(totalAmount * 100);

    // Create a Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amountPaise,
      currency,
      receipt: receipt || `receipt_${Date.now()}`
    });

    function toNumber(value){
      if(value === null || value === undefined) return 0;
      if(typeof value === 'number') return Number.isFinite(value) ? value : 0;
      if(typeof value === 'string'){
        const cleaned = value
          .replace(/₹/g,'')
          .replace(/,/g,'')
          .replace(/\s+/g,'')
          .replace(/[^0-9.\-]/g,'');
        const n = Number(cleaned);
        return Number.isFinite(n) ? n : 0;
      }
      if(typeof value === 'object'){
        const nested = value.amount ?? value.price ?? value.totalPrice ?? value.total;
        return toNumber(nested);
      }
      return 0;
    }

    // Persist our own order
    const subtotal = Math.max(0, toNumber(totals.subtotal));
    const shipping = Math.max(0, toNumber(totals.shipping));
    const discount = Math.max(0, toNumber(totals.discount));

    // Prefer totals.total if valid; otherwise compute from other totals.
    const totalComputedRaw = toNumber(totals.total);
    const totalComputed = Math.max(0, totalComputedRaw);

    const totalFromParts = Math.max(0, subtotal + shipping - discount);

    // Fallback chain:
    // 1) totals.total if > 0
    // 2) subtotal + shipping - discount
    // 3) incoming amount
    const totalToSave = (Number.isFinite(totalComputed) && totalComputed > 0)
      ? totalComputed
      : (Number.isFinite(totalFromParts) && totalFromParts > 0)
        ? totalFromParts
        : Math.max(0, totalAmount);

    console.log('[razorpay/create-order] incoming totals=', JSON.stringify(totals));
    console.log('[razorpay/create-order] computed totals=', {
      subtotal,
      shipping,
      discount,
      totalComputed: Number.isFinite(totalComputed) ? totalComputed : null,
      totalFromParts,
      totalToSave,
      totalAmount
    });

    const saved = await Order.create({
      orderId,
      items,
      totals: {
        subtotal,
        shipping,
        discount,
        total: totalToSave
      },
      address,
      payment: {
        method: paymentMethod,
        provider: 'razorpay',
        status: 'processing',
        razorpayOrderId: razorpayOrder.id
      },
      status: 'processing'
    });

    console.log('[razorpay/create-order] saved totals=', saved?.totals);


    res.json({
      success: true,
      razorpayKeyId: RAZORPAY_KEY_ID,
      order: {
        id: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency
      },
      backendOrder: {
        id: saved._id,
        orderId: saved.orderId
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to create Razorpay order' });
  }
});

// Razorpay webhook endpoint (recommended)
router.post('/webhook', async (req, res) => {
  try {
    // Razorpay sends signature in header: x-razorpay-signature
    const signature = req.headers['x-razorpay-signature'];
    const event = req.body;

    if (!signature) {
      return res.status(400).json({ success: false, message: 'Missing x-razorpay-signature' });
    }

    // Verify for payment.* events
    // event format: { payload: { payment: { entity: { razorpay_payment_id, razorpay_order_id }}} }
    const payload = event?.payload?.payment?.entity;
    if (!payload) {
      return res.json({ success: true });
    }

    const razorpay_order_id = payload.razorpay_order_id;
    const razorpay_payment_id = payload.razorpay_payment_id;

    const expected = computeExpectedSignature({
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id
    }, RAZORPAY_KEY_SECRET);

    if (expected !== signature) {
      return res.status(400).json({ success: false, message: 'Invalid webhook signature' });
    }

    // Update our order
    const updated = await Order.findOneAndUpdate(
      { 'payment.razorpayOrderId': razorpay_order_id },
      {
        $set: {
          'payment.status': 'success',
          'payment.paymentId': razorpay_payment_id,
          'payment.provider': 'razorpay'
        },
        $max: { 'payment': {} }
      },
      { new: true }
    );

    // If you want to handle failed payments as well, add payment.failed events.
    return res.json({ success: true, updated: Boolean(updated) });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Webhook handling failed' });
  }
});

module.exports = router;

