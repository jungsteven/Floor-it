const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    userName : {type: String, require: true},
    password : {type: String, require: true},
});

// authSchema.pre('save', (req, res, next) => {
//   console.log('middleware being invoked');
//   next();
// })

module.exports = mongoose.model('Account', Account);