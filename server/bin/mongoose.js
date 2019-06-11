const mongoose = require('mongoose');


// const uri = "mongodb+srv://admin:ilovetesting@floorit-b0slm.mongodb.net/auth?retryWrites=true&w=majority";
const startMongoose = () => {
  mongoose.connect('mongodb://localhost/floor-it');
  mongoose.connection.once('open', (error, client) => {
    console.log('Connected with MongoDB ORM');
  });
};

module.exports = startMongoose;






// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const authSchema = new Schema({
//   userName : {type: String, require: true},
//   password : {type: String, require: true},
// });

// authSchema.pre('save', (req, res, next) => {
//   console.log('middleware being invoked');
//   return next();
// })

// const uri = "mongodb+srv://admin:ilovetesting@floorit-b0slm.mongodb.net/auth?retryWrites=true&w=majority";
// mongoose.connect(uri, { useNewUrlParser: true });
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected');
// });

// const authController = {
//   createUser : (req, res, next) => {
//     authModel.create({userName: 'Mr.Owl', password: 'pass'}, (err, res) => {
//       if(err) console.log(err);
//       console.log(res);
//       return next();
//     } )
//   }
// }


// module.exports = db;
// // module.exports = mongoose.model('auth', authSchema);
