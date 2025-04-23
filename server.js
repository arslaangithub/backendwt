const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://arslaan490:xhQ6npCcUL6qLt4T@cluster0.lrdy0vq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error(err));
