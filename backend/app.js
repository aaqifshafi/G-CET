const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const myApplications = require('./routes/myApplications');
const applicationForm = require('./routes/applicationForm');
const feedback = require('./routes/feedback');
const notice = require('./routes/notice');
const payment = require('./routes/payment');

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON bodies
app.use(bodyParser.json());


// CORS middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/')
app.use('/', authRoutes, applicationForm, feedback, notice, myApplications, payment);


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
