// Import necessary modules
const express = require('express');
const Feedback = require('../models/Feedback');

// Initialize Express router
const router = express.Router();


// Endpoint to handle feedback submission
router.post('/feedback', async (req, res) => {
    try {
        const { name, email, feedback } = req.body;

        // Create new feedback document
        const feedbackData = new Feedback({
            name,
            email,
            feedback,
        });

        // Save feedback to the database
        await feedbackData.save();

        res.status(201).json({ message: 'Feedback submitted successfully', sucess: true });
    } catch (error) {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ message: 'Internal Server Error', sucess: false });
    }
});

module.exports = router;