// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your actual API key
const API_KEY = '9c1ddb70fef63d7c988e9607796e5be4b635d1d6222038413f12fc63f9bfe1f0';
const API_URL = 'https://www.lotteryresultsapi.com/api/results';

app.get('/api/lottery-results', async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lottery results' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});