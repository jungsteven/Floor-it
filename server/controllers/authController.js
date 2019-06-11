
const Account = require('../models/authModel');
const bcrypt = require('bcrypt');
const authController = {
  createUser(req, res, next){
    console.log(req.body);
    Account.create({userName: req.body.userName, password: req.body.password }, (err, res) => {
      if(err) res.locals.error = err;
      else console.log(res);
      return next();
    })
  },
  findUser(req, res, next){
    const locals = res.locals;
    let match = null;
    //invoke find method with username in body,
    Account.find({userName: req.body.userName}, async (err, account) => {
      if(!account.length){
        locals.error = true;
        return next();
      }
      console.log(account);
      await bcrypt.compare(req.body.password, account[0].password)
        .then(result =>{
          locals.isMatch = result;
        });
      return next();
    });
    //run bcrypt compare
    //do something with boolean
  }
}

const json = {
  userName: 'string',
  password: 'string'
}
module.exports = authController;