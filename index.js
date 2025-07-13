const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/convert', async (req, res) => {
  const { from, to } = req.query;

  try {
    const fixerUrl = `http://data.fixer.io/api/latest?access_key=11e10d93ee781c2a4dddcd061649196b&symbols=USD,EUR,INR`;
    const response = await axios.get(fixerUrl);
    const rates = response.data.rates;

    if (!rates[from] || !rates[to]) {
      return res.status(400).json({ success: false, error: "Invalid currencies" });
    }

    const rate = rates[to] / rates[from];
    res.json({ success: true, rate }); // ✅ correct structure
  } catch (err) {
    res.status(500).json({ success: false, error: "Fixer API Error" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
