const mongoose = require('mongoose');

// Define the schema for the Student model
const studentSchema = new mongoose.Schema({
    forms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Form' }],
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
    program: {
        type: String,
        required: true
    },
    religion: {
        type: String,

    },
    fatherName: {
        type: String,

    },
    motherName: {
        type: String,

    },
    department: {
        type: String,
    },
    dob: {
        type: String,

    },
    gender: {
        type: String,


    },
    category: {
        type: String,


    },
    address: {
        type: String,

    },
    district: {
        type: String,

    },
    state: {
        type: String

    },
    pincode: {
        type: String

    },
    currentSem: {
        type: String

    },
    enrollmentNumber: {
        type: String,
        required: true,
        unique: true


    }


});

// Create the Student model from the schema
const Student = mongoose.model('Student', studentSchema);

// Export the Student model
module.exports = Student;
