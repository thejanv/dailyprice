const mongoose = require('mongoose');

const GoldRateSchema = new mongoose.Schema({
  date: { type: String, required: true },
  rate22KT: { type: Number, required: true },
  rate24KT: { type: Number, required: true }
}, { collection: 'dailyPrice' });

module.exports = mongoose.model('GoldRate', GoldRateSchema);
