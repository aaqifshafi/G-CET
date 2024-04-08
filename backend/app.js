// require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // For password hashing
const Student = require('./models/Students');
const authRoutes = require('./routes/authRoutes');
const applicationForm = require('./routes/applicationForm');

const app = express();
const PORT = 5000;
// const env = process.env.ACCESS_TOKEN_SECRET;

// Middleware to parse JSON bodies
app.use(bodyParser.json());


// CORS middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/')
app.use('/', authRoutes, applicationForm);


// Route for admin sign-in
app.post('/admin/login', (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    // Find user by email
    const user = users.find(user => user.email === email);

    // If user not found or password does not match, return error
    if (!user || user.password !== password) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // If authentication successful, return success message and authorization token
    res.status(200).json({ success: true, message: 'Login successful', authorization: user.authorization });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
