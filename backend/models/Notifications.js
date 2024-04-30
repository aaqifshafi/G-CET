const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    downloadLink: {
        type: String,


    },
    filePath: {
        type: String,
        required: true,
    },
    originalName: {
        type: String,
        required: true,
    }
});
const Notifications = mongoose.model('Notifications', noticeSchema);

module.exports = Notifications;