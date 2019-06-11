
const Account = require('../models/authModel');
const authController = {
  createUser(req, res, next){
    console.log(req.body);
    Account.create({userName: req.body.userName, password: req.body.password }, (err, res) => {
      if(err) console.log(err);
      console.log(res);
      return next();
    })
  }
}

const json = {
  userName: 'string',
  password: 'string'
}
module.exports = authController;