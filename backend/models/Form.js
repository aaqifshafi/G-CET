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
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: false,

    },
    feeStatus: {
        type: Boolean,
        default: "false",
    },
    transactionId: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model('Form', FormSchema);
