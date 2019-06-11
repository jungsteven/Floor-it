
const Account = require('../models/authModel');
const authController = {
  createUser(req, res, next){
    Account.create({userName: 'Ms. Owl', password: 'hunter2'}, (err, res) => {
      if(err) console.log(err);
      console.log(res);
      return next();
    })
  }
}

module.exports = authController;