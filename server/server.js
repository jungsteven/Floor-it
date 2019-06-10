const db = require('./bin/db');
const path = require('path');
const express = require('express');
const PORT = 3001;
const app = express();

module.exports = app.listen((PORT, () => {
  console.log(`Server listening on ${PORT}`);
}));


