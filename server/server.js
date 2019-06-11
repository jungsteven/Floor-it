const db = require('./bin/db');
const express = require('express');
const authController = require('./controllers/authController.js')

const startMongoose = require('./bin/mongoose');
startMongoose();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('It works.');
  res.status(200).send('IT WORKS!');
})

app.post('/account', authController.createUser, (req, res) => {
   console.log('REACHED');
   console.log(req.body);
   // authController.createUser(req, res);
   res.status(200).send('Uploaded to Database');    
});

app.listen(3001, () => {
  console.log('Server listening on Port 3001')
})

module.exports = server;
