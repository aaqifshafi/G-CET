const mongoose = require('mongoose');

// Define the schema for the teacher model
const teacherSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique
    },
    password: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    empId: {
        type: String
    }


});

// Create the teacher model from the schema
const teacher = mongoose.model('teacher', teacherSchema);

// Export the teacher model
module.exports = teacher;
