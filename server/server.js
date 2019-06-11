const db = require('./bin/db');
const express = require('express');
const authController = require('./controllers/authController.js')
const app = express();

app.get('/', (req, res) => {
  console.log('It works.');
  res.status(200).send('IT WORKS!');
})

app.post('/account', authController.createUser, (req, res) => {
   res.status(200).send('Uploaded to Database');    
});

app.listen(3001, () => {
  console.log('Server listening on Port 3001')
})



