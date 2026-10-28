const express = require('express');
const apps = express();

apps.get('/', (req, res) => {
  res.send('Works on my machine?');
});

module.exports = apps;
