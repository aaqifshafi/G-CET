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

router.get('/admin/myApplications', async (req, res) => {
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

module.exports = router;
