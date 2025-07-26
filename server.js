require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const GoldRate = require('./models/GoldRate');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Route to get latest gold rate
app.get('/api/gold-rate', async (req, res) => {
  try {
    const latest = await GoldRate.findOne().sort({ _id: -1 });
    res.json(latest);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
