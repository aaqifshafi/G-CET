const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String,
    createdAt: { type: Date, default: Date.now } // Automatically set the current date and time
});
const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;