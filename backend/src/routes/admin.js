const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Simple scaffold (no auth yet)
router.get('/orders', async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit || 50), 200);
    const orders = await Order.find().sort({ createdAt: -1 }).limit(limit).lean();
    res.json({ success: true, orders });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
});

router.patch('/orders/:orderId/status', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body || {};

    if (!status) return res.status(400).json({ success: false, message: 'status is required' });

    const updated = await Order.findOneAndUpdate(
      { orderId },
      { $set: { status } },
      { new: true }
    ).lean();

    res.json({ success: true, order: updated });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Failed to update order status' });
  }
});

module.exports = router;

