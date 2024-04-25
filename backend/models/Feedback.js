const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String,
    createdAt: { type: Date, default: Date.now },
    feedbackId: { type: String, required: true, unique: true },
    status: { type: Boolean, default: false },

});

module.exports = mongoose.model('Feedback', feedbackSchema);