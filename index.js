const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/convert', (req, res) => {
  res.json({
    success: true,
    rates: {
      USD: 0.012,
      EUR: 0.01
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
