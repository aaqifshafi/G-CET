require("dotenv").config()
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer.middleware');
// const upload = multer({ dest: 'uploads/' });
const Notice = require('../models/Notifications');

const url = process.env.SERVER_URL
// GET route for /notice
router.get('/notice', async (req, res) => {
    try {
        // Fetch notices from the database
        const notices = await Notice.find({}, 'category title date downloadLink').lean(); // Lean to get plain JavaScript objects instead of Mongoose Documents

        // Send the notices to the frontend
        res.json(notices);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: err.message });
    }
});


router.post("/admin/upload-notice", upload.single("file"), async (req, res) => {
    console.log(req.file)
    const noticeData = {
        originalName: req.file.originalname,
        category: req.body.category,
        title: req.body.title,
        date: new Date(),
        filePath: req.file.path
    }
    console.log(noticeData)
    const notice = await Notice.create(noticeData)
    const downloadLink = `${url}/notice/${notice.id}`
    notice.downloadLink = downloadLink
    await notice.save()

    res.json({ status: "success", message: "Notice uploaded successfully", downloadLink })
})

router.get("/notice/:id", async (req, res) => {
    const notice = await Notice.findById(req.params.id)
    // Assuming you have a field in your Notice model to store the file path
    res.download(notice.filePath, notice.originalName)
})


module.exports = router;
