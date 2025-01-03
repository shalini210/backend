const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const taskRoutes = require('./routes/taskRoutes');
const settingsRoutes = require('./routes/settingsRoutes');


const app = express();
const PORT = process.env.PORT || 5000;  // Use environment variable or fallback to 5000



// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/settings', settingsRoutes);


// MongoDB connection string with database name
mongoose.connect('mongodb+srv://Sabarinathan:sabari@cluster0.f9gzq.mongodb.net/myVirtualDatabase?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
