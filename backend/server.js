const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config(); // For loading .env file

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Routes
app.use('/api/auth', authRoutes); // Mount the auth routes

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
