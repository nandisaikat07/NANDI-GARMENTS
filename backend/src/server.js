const express = require('express');
const cors = require('cors');


const { PORT, NODE_ENV, CORS_ORIGIN } = require('./config/env');
const { connectDb } = require('./config/db');

const razorpayRoutes = require('./routes/razorpay');
const adminRoutes = require('./routes/admin');
const publicOrdersRoutes = require('./routes/publicOrders');
const addressRoutes = require('./routes/addresses');

async function start(){

  await connectDb();

  const app = express();

  // Webhook needs raw body for signature verification in some setups.
  // Here we accept JSON and verify using the shared secret + provided signature.
  // Razorpay usually recommends verifying against raw body; for simplicity we rely on the
  // payment signature payload approach in razorpay.js.
  app.use(express.json({ limit: '1mb' }));

  // app.use(helmet());
  app.use(cors({ origin: CORS_ORIGIN, credentials: true }));

  app.get('/', (req, res) => {
    res.json({
      ok: true,
      service: 'nandi-garments-backend',
      health: '/health',
      api: {
        orders: '/api/orders',
        addresses: '/api/addresses/:customerId',
        razorpay: '/api/razorpay/create-order'
      }
    });
  });

  app.get('/health', (req, res) => res.json({ ok: true, service: 'nandi-garments-backend' }));

  app.use('/api/razorpay', razorpayRoutes);
  app.use('/api', addressRoutes);
  app.use('/api', publicOrdersRoutes);
  app.use('/api/admin', adminRoutes);


  // Basic error handler
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  });

  const server = app.listen(PORT, () => {
    console.log(`[backend] running on http://localhost:${PORT}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`[backend] port ${PORT} is already in use. Set a different PORT in backend/.env and restart.`);
      process.exit(1);
    }

    throw err;
  });
}

start().catch((e) => {
  console.error('Failed to start server:', e);
  process.exit(1);
});
