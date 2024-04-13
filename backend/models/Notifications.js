const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    category: String,
    title: String,
    date: Date,
    downloadLink: String,
});
const Notifications = mongoose.model('Notifications', noticeSchema);

module.exports = Notifications;