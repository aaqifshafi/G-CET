// Import necessary modules
const express = require('express');
const Feedback = require('../models/Feedback');

// Initialize Express router
const router = express.Router();
// PUT route to update the status property of a feedback
router.put('/admin/updateStatus/:feedbackId', async (req, res) => {
    const { feedbackId } = req.params;

    try {
        // Find the feedback by feedbackId
        const feedback = await Feedback.findOne({ feedbackId });

        if (!feedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        // Update the status property to true
        feedback.status = true;

        // Save the updated feedback
        await feedback.save();

        return res.status(200).json({ message: "Feedback status updated successfully", feedback });
    } catch (error) {
        console.error("Error updating feedback status:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
// Endpoint to handle feedback submission
router.post('/feedback', async (req, res) => {
    try {
        const { name, email, feedback, feedbackId } = req.body;

        // Create new feedback document
        const feedbackData = new Feedback({
            name,
            email,
            feedback,
            feedbackId,
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