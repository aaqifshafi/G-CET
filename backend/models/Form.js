const mongoose = require('mongoose');

// Define the Form schema
const FormSchema = new mongoose.Schema({
    enrollmentNumber: {
        type: String,
        required: true,
        unique: true,
    },
    currentSem: {
        type: String,
        required: true,
    },
    formNumber: {
        type: String,
        required: true,
        unique: true,
    },
});

// Create a model from the schema
const Form = mongoose.model('Form', FormSchema);

module.exports = Form;
