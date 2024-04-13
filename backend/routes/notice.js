const express = require('express');
const router = express.Router();
const Notice = require('../models/Notifications'); // Assuming Notice is your Mongoose model for notices

// GET route for /notice
router.get('/notice', async (req, res) => {
    try {
        // Fetch notices from the database
        const notices = await Notice.find({}, 'category title date downloadLink').lean(); // Lean to get plain JavaScript objects instead of Mongoose Documents

        // Send the notices to the frontend
        res.json(notices);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
