const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notifications: { type: Boolean, default: true }, // Email reminders for tasks
});

module.exports = mongoose.model('User', userSchema);
