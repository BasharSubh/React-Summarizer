const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/api', async (req, res) => {
  const url = req.query.url;

  const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: url,
      length: '1',
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data.summary);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

