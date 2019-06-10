const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:ilovetesting@floorit-b0slm.mongodb.net/auth?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

module.exports = db;
