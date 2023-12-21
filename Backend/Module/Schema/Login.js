const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    unique: true,
  },
 email: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    // required: true,
  },
  number: {
    type: String,
    // required: true,
    unique: true,
  },
  otp: {
    type: String,
    unique: true,
  },

},
{
  timestamps:true,
});

const Item = mongoose.model('MyCollection', itemSchema);

module.exports = Item;
