const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/student/myApplications', async (req, res) => {
    try {
        const { enrollmentNumber } = req.body;

        // Find forms submitted by the student
        const forms = await Form.find({ enrollmentNumber: enrollmentNumber });

        if (forms.length === 0) {
            return res.status(404).json({ message: 'No Forms Submitted yet' });
        }

        return res.status(200).json({ success: true, message: 'Forms successfully fetched', forms: forms });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/admin/applications', async (req, res) => {
    try {


        // Find forms submitted by the student
        const forms = await Form.find({})

        if (forms.length === 0) {
            return res.status(404).json({ message: 'No Forms Submitted yet' });
        }

        return res.status(200).json({ success: true, message: 'Forms successfully fetched', forms: forms });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.get('/admin/pending', async (req, res) => {
    try {


        // Find forms submitted by the student
        const forms = await Form.find({ status: false });

        if (forms.length === 0) {
            return res.status(404).json({ message: 'No Forms Submitted yet' });
        }

        return res.status(200).json({ success: true, message: 'Forms successfully fetched', forms: forms });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.put('/admin/pending/update/:formNumber', async (req, res) => {
    const { formNumber } = req.params;

    try {
        // Find the feedback by feedbackId
        const form = await Form.findOne({ formNumber });

        if (!form) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        // Update the status property to true
        form.status = true;

        // Save the updated feedback
        await form.save();

        return res.status(200).json({ message: "Form status updated successfully", form });
    } catch (error) {
        console.error("Error updating feedback status:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/student/forms/:enrollmentNumber', async (req, res) => {
    try {
        // Extract enrollment number from request parameters
        const { enrollmentNumber } = req.params;

        // Query database to find the latest form by enrollment number with feeStatus false
        const form = await Form.findOne({ enrollmentNumber, feeStatus: false })
            .sort({ createdAt: -1 })
            .limit(1);


        if (!form) {
            return res.status(404).json({ error: 'Fill a Form first' });
        }
        res.json(form);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;
