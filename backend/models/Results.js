const mongoose = require('mongoose');

// Define the schema for the Resultnmodel
const resultSchema = new mongoose.Schema({

    semester: Number,
    result: [{ subject: String, maxMarks: Number, marksObtained: Number, }],
    link: String,
    Teachers: {
        type: Schema.Types.ObjectId,
        refPath: 'uploaderModel'
    },
    uploaderModel: Teachers

});

function passOrFail(score, totalMarks) {
    // Calculate percentage
    const percentage = (score / totalMarks) * 100;

    // Check if percentage is above 40%
    if (percentage > 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}
const Result = mongoose.model('Result', resultSchema);


module.exports = Result;
