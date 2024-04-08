const mongoose = require('mongoose');

// Define the schema for the Student model
const studentSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    program: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,

    },

    currentSem: {
        type: String

    },
    enrollmentNumber: {
        type: String

    }


});

// Create the Student model from the schema
const Student = mongoose.model('Student', studentSchema);

// Export the Student model
module.exports = Student;
