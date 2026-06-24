const dotenv = require('dotenv');
dotenv.config();

function must(name){
  const v = process.env[name];
  if(!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

module.exports = {
  PORT: Number(process.env.PORT || 5050),
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: must('MONGODB_URI'),

  RAZORPAY_KEY_ID: must('RAZORPAY_KEY_ID'),
  RAZORPAY_KEY_SECRET: must('RAZORPAY_KEY_SECRET'),

  CORS_ORIGIN: process.env.CORS_ORIGIN || '*'
};
