require("dotenv").config()
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer.middleware');
const Notice = require('../models/Notifications');
const { uploadFile } = require('../middlewares/uploadToSpaces');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink); // To delete the file after uploading to DigitalOcean Spaces


// GET route for /notice
router.get('/notice', async (req, res) => {
    try {
        // Fetch notices from the database, sorted by createdAt in descending order (newest first)
        const notices = await Notice.find({}, 'category title date downloadLink').lean();

        // Send the notices to the frontend
        res.json(notices);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: err.message });
    }
});



router.post("/admin/upload-notice", upload.single("file"), async (req, res) => {
    const noticeData = {
        originalName: req.file.originalname,
        category: req.body.category,
        title: req.body.title,
        date: new Date(),
        filePath: req.file.path
    }
    const file = req.file;
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    console.log(result);

    // Save the notice to the database
    const notice = await Notice.create(noticeData)
    const downloadLink = `${result.Location}`
    notice.downloadLink = downloadLink
    await notice.save()

    res.json({ status: "success", message: "Notice uploaded successfully", downloadLink })
})


router.get("/notice/:id", async (req, res) => {
    const notice = await Notice.findById(req.params.id)

    // Assuming you have a field in your Notice model to store the file path
    const readStream = getFileStream(notice.downloadLink)
    readStream.pipe(res)

    res.download(notice.downloadLink, notice.originalName)
})


module.exports = router;
