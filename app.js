const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Received request for /');
  let message = 'Works on my machine.';
  res.send('Works on my machine.');
});

module.exports = app;
