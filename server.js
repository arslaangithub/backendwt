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
mongoose.connect('mongodb+srv://mohammedarslaan2004:rj1Z5cEYyxAYkYc7@arslaan49.mx5qn1l.mongodb.net/?retryWrites=true&w=majority&appName=Arslaan49', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error(err));
