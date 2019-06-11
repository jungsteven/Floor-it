const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
    userName : {type: String, require: true},
    password : {type: String, require: true},
});

// authSchema.pre('save', (req, res, next) => {
//   console.log('middleware being invoked');
//   return next();
// })

module.exports = mongoose.model('auth', authSchema);