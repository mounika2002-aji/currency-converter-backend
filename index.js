const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Allow frontend to connect
app.use(cors());

app.get('/api/convert', (req, res) => {
  const mockRates = {
    USD: 0.012,
    EUR: 0.01
  };
  res.json({
    success: true,
    rates: mockRates
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
