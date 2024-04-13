
const express = require('express');
const Students = require('../models/Students');
const router = express.Router();

// POST /application
router.post('/student/form', async (req, res) => {
    try {
        // Get the data from the request body
        const { email } = req.body; // Extract email from request body

        const updateData = req.body; // Data to update from request body

        // Find the student by email and update it with the provided data
        const updatedStudent = await Students.findOneAndUpdate({ email }, updateData, { new: true });
        console.log(updatedStudent);
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found', success: false });
        }

        return res.status(200).json({ success: true, message: "Form successfully submitted" }); // Send success response
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
});

module.exports = router;
