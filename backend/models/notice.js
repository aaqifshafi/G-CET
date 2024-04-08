const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    category: String,
    title: String,
    description: String,
    date: { type: Date, default: Date.now }
});