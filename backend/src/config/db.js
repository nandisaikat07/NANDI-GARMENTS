const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env');

async function connectDb(){
  mongoose.set('strictQuery', true);
  await mongoose.connect(MONGODB_URI, {
    autoIndex: true
  });
  return mongoose.connection;
}

module.exports = { connectDb };

