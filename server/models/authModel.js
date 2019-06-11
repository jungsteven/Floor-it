const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const Schema = mongoose.Schema;

const Account = new Schema({
    userName : {type: String, require: true},
    password : {type: String, require: true},
});

Account.pre('save', async function(next) {
  //run the bcrypt here
  const that = this;
  await bcrypt.hash(that.password, saltRounds)
    .then(function(hash){
      that.password = hash;
      return next();
    });   
});

module.exports = mongoose.model('Account', Account);