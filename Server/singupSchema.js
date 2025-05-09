// models/UserSignup.js
const mongoose = require('mongoose');

const singupSchema = new mongoose.Schema({
  username: {type: String,
    required: true,unique: true,minlength: 3}
    ,
  email: {type: String,required: true,unique: true,match: [/.+\@.+\..+/, 'Email Ex:jonea7ma@gmail.com']
  },
  password: {type: String,required: true,minlength: 6
  },
  //to save when user is created
  createdAt: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('UserSignup', singupSchema);
