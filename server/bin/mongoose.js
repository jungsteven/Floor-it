const mongoose = require('mongoose');


const uri = "mongodb+srv://admin:ilovetesting@floorit-b0slm.mongodb.net/auth?retryWrites=true&w=majority";
const startMongoose = () => {
  mongoose.connect(uri);
  mongoose.connection.once('open', (error, client) => {
    console.log('Connected with MongoDB ORM');
  });
};

module.exports = startMongoose;

