const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Task title
  dueDate: { type: Date, required: true }, // Due date for the task
  description: { type: String }, // Optional task description
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Completed'], // Status can only be one of these values
    required: true 
  },
  createdAt: { type: Date, default: Date.now }, // Timestamp for when the task was created
});

module.exports = mongoose.model('Task', taskSchema);
