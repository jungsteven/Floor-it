const db = require('../bin/mongoose.js');
const authModel = require('../models/authModel');

const authController = {
  createUser : (req, res, next) => {
    authModel.create({userName: 'Mr.Owl', password: 'pass'}, (err, res) => {
      if(err) console.log(err);
      console.log(res);
      return next();
    } )
  }
}

module.exports = authController;