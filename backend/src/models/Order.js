const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String, required: true },
    qty: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 }
  },
  { _id: false }
);

const AddressSchema = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: String },
    line1: { type: String },
    city: { type: String },
    pin: { type: String },
    landmark: { type: String }
  },
  { _id: false }
);

const PaymentSchema = new mongoose.Schema(
  {
    method: { type: String, enum: ['cod', 'upi', 'cards', 'netbanking', 'unknown'], default: 'unknown' },
    provider: { type: String, enum: ['razorpay', 'cod', 'unknown'], default: 'unknown' },
    status: { type: String, enum: ['processing', 'success', 'failed'], default: 'processing' },
    paymentId: { type: String },
    razorpayOrderId: { type: String }
  },
  { _id: false }
);

const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },

    userRef: { type: mongoose.Schema.Types.ObjectId, default: null },

    items: { type: [OrderItemSchema], required: true },
    totals: {
      subtotal: { type: Number, default: 0 },
      shipping: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
      total: { type: Number, required: true, min: 0 }
    },

    address: { type: AddressSchema },

    payment: { type: PaymentSchema },

    status: {
      type: String,
      enum: ['confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'confirmed'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);

