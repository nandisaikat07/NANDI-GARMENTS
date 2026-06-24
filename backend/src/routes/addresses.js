const express = require('express');
const CustomerAddressBook = require('../models/CustomerAddress');

const router = express.Router();

function cleanAddress(input = {}, key){
  return {
    key,
    label: input.label || (key === 'office' ? 'Office Address' : 'Home Address'),
    name: String(input.name || '').trim(),
    phone: String(input.phone || '').trim(),
    line1: String(input.line1 || '').trim(),
    city: String(input.city || '').trim(),
    pin: String(input.pin || '').trim(),
    landmark: String(input.landmark || '').trim(),
    country: String(input.country || 'India').trim(),
    isDefault: Boolean(input.isDefault)
  };
}

function validateAddress(address){
  const missing = ['name', 'phone', 'line1', 'city', 'pin', 'country'].filter((field) => !address[field]);
  return missing;
}

router.get('/addresses/:customerId', async (req, res) => {
  try {
    const customerId = String(req.params.customerId || '').trim();
    if (!customerId) return res.status(400).json({ success: false, message: 'customerId is required' });

    const book = await CustomerAddressBook.findOne({ customerId }).lean();
    res.json({ success: true, addresses: book?.addresses || [] });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Failed to fetch addresses' });
  }
});

router.put('/addresses/:customerId/:key', async (req, res) => {
  try {
    const customerId = String(req.params.customerId || '').trim();
    const key = String(req.params.key || '').trim();

    if (!customerId) return res.status(400).json({ success: false, message: 'customerId is required' });
    if (!['home', 'office'].includes(key)) {
      return res.status(400).json({ success: false, message: 'Address key must be home or office' });
    }

    const address = cleanAddress(req.body || {}, key);
    const missing = validateAddress(address);
    if (missing.length) {
      return res.status(400).json({ success: false, message: `Missing fields: ${missing.join(', ')}` });
    }

    const book = await CustomerAddressBook.findOne({ customerId });
    if (!book) {
      const created = await CustomerAddressBook.create({ customerId, addresses: [address] });
      return res.json({ success: true, address, addresses: created.addresses });
    }

    const nextAddresses = book.addresses.filter((item) => item.key !== key);
    nextAddresses.push(address);
    book.addresses = nextAddresses;
    await book.save();

    res.json({ success: true, address, addresses: book.addresses });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Failed to save address' });
  }
});

module.exports = router;
