const db = require('../bin/db.js');
const authModel = require('../models/authModel');

const authController = {
  createUser : (req, res, next) => {
    authModel.create({userName: 'Mr.Owl', password: 'password'}, (err, res) => {
      if(err) console.log(err);
      console.log(res);
      return next();
    } )
  }
}

 

module.exports = authController;