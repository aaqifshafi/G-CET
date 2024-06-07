const express = require('express');
const Students = require('../models/Students');
const Form = require('../models/Form'); // Import the Form model
const router = express.Router();



router.post('/student/form', async (req, res) => {
    try {
        // Destructure the required properties from req.body
        const formData = req.body;
        const { email, enrollmentNumber, currentSem } = formData;

        // Try to find the student document in the database
        const filter = { email: email };
        const student = await Students.findOne(filter);

        if (!student) {
            // If no student found with the provided email, return a 404 response
            return res.status(404).json({ message: 'No student registered with the provided email', success: false });
        } else {
            // Check if a form with the same enrollmentNumber and currentSem already exists
            const existingForm = await Form.findOne({ enrollmentNumber, currentSem });
            if (existingForm) {
                return res.status(404).json({ message: 'Form already exists', success: false });
            } else {
                const data = {
                    enrollmentNumber: enrollmentNumber,
                    currentSem: currentSem,
                    formNumber: formData.formNumber,
                    email: email,

                }

                // Update Student Details HERE
                student.currentSem = currentSem;
                student.address = formData.address;
                student.district = formData.city;
                student.district = formData.district;
                student.state = formData.state;
                student.pincode = formData.pincode;
                student.gender = formData.gender;
                student.category = formData.category;
                student.dob = formData.dob;
                student.enrollmentNumber = enrollmentNumber;
                student.religion = formData.religion;
                student.department = formData.department;
                student.program = formData.program;
                student.fatherName = formData.fatherName;
                student.motherName = formData.motherName;


                const newForm = new Form(data);
                // Save the new form document
                const savedForm = await newForm.save();
                // Update the student document to add the reference to the new form
                student.forms.push(savedForm._id);
                await student.save();
                // Populate the forms field before sending the response
                const populatedStudent = await Students.findOne(filter).populate('forms')

                return res.status(200).json({ success: true, message: 'Form Sucessfuly Saved', student: populatedStudent });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
});

module.exports = router;