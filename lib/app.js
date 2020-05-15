const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use((req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = app;
