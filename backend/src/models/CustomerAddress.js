const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
  {
    key: { type: String, enum: ['home', 'office'], required: true },
    label: { type: String },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    line1: { type: String, required: true },
    city: { type: String, required: true },
    pin: { type: String, required: true },
    landmark: { type: String },
    country: { type: String, default: 'India' },
    isDefault: { type: Boolean, default: false }
  },
  { _id: false }
);

const CustomerAddressBookSchema = new mongoose.Schema(
  {
    customerId: { type: String, required: true, unique: true, index: true },
    addresses: { type: [AddressSchema], default: [] }
  },
  { timestamps: true }
);

module.exports = mongoose.model('CustomerAddressBook', CustomerAddressBookSchema);
