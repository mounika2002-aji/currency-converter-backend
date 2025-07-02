const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/convert', (req, res) => {
  const to = req.query.to?.toUpperCase();
  const amount = parseFloat(req.query.amount);

  const mockRates = {
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095,
    AUD: 0.018,
    CAD: 0.016,
    JPY: 1.75
  };

  if (!to || isNaN(amount) || !mockRates[to]) {
    return res.status(400).json({
      success: false,
      message: 'Invalid currency or amount'
    });
  }

  const rate = mockRates[to];
  const converted = (amount * rate).toFixed(2);

  res.json({
    success: true,
    rate: rate,
    converted: converted,
    currency: to
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
