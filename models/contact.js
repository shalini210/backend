const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the person
  email: { type: String, required: true }, // Email address
  phone: { type: String }, // Phone number
  company: { type: String }, // Associated company name
  position: { type: String }, // Job title or position

  notes: { type: String }, // General notes
  type: { type: String, enum: ['lead', 'contact'], required: true }, // Indicates whether the entry is a lead or contact

   // Array of tags for categorization
  leadScore: { type: Number, min: 0, max: 100 }, // Lead scoring (0-100) for prioritization
  lastInteraction: { type: Date, default: Date.now }, // Last interaction date
  updatedAt: { type: Date, default: Date.now }, // Date when the contact/lead was last updated
 // Current status of the lead/contact
});

// Middleware to automatically update the `updatedAt` field
contactSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Contact', contactSchema);
