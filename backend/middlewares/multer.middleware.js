const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the destination folder where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original filename
    }
});

// Initialize multer
const upload = multer({ storage: storage });

module.exports = upload;
