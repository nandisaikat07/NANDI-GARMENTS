const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Public (no auth yet) endpoints for the customer pages.
// You can later restrict using auth.

router.get('/orders', async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit || 50), 200);
    const orders = await Order.find().sort({ createdAt: -1 }).limit(limit).lean();
    res.json({ success: true, orders });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
});

router.get('/orders/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ orderId }).lean();

    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    res.json({ success: true, order });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Failed to fetch order' });
  }
});

module.exports = router;

