const express = require('express');
const authController = require('./controllers/authController.js')
const bodyParser = require('body-parser');
const startMongoose = require('./bin/mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('It works.');
  res.status(200).send('IT WORKS!');
});

app.get('/account', authController.findUser, (req, res) => {
  console.log('FINAL MIDDLEWARE', res.locals);
  if(res.locals.error || res.locals.isMatch === false) return res.status(400).json({error: 'invalid credentials'});
  else return res.status(200).json({placeholder: 'SUCCESS'});
});

app.post('/account', authController.createUser, (req, res) => {
  if(res.locals.error) return res.status(400).json({error: 'There was an error in your request, please try again later'});
  res.status(200).send('Uploaded to Database');    
});

app.listen(3001, () => {
  console.log('Server listening on Port 3001')
})
startMongoose();
module.exports = app;
