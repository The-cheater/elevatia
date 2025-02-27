const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  hoursSpent: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);