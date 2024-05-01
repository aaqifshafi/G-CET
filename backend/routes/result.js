require("dotenv").config();
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer.middleware');
const Result = require('../models/Results');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs-extra');

router.post("/admin/upload-result", upload.single("file"), async (req, res) => {
    const resultData = {
        originalName: req.file.originalname,
        semester: req.body.semester,
        department: req.body.department,
        exam: req.body.exam,
        filePath: req.file.path
    }

    // Convert Excel to JSON
    const excelData = excelToJson({
        sourceFile: resultData.filePath,
        header: {
            rows: 1,
        },
        columnToKey: {
            // '*' means to use the column header as the key
            '*': '{{columnHeader}}',
        },
    });

    // Extract subjects from the first row (excluding non-header columns like enrollment number)
    const subjects = Object.keys(excelData.Sheet1[0]).filter(key => key !== 'enrollmentNumber');

    // Map subjects and marks for each student
    const result = excelData.Sheet1.map((row) => {
        const marksArray = [];
        subjects.forEach(subject => {
            // Exclude the 'enrollmentNumber' column when mapping subjects
            if (subject !== 'enrollmentNumber') {
                marksArray.push({
                    subject: subject,
                    marks: row[subject]
                });
            }
        });

        return {
            enrollmentNumber: row.enrollmentNumber,
            exam: resultData.exam,
            marks: marksArray
        };
    });

    const resultModel = await Result.create({
        semester: resultData.semester,
        department: resultData.department,
        exam: resultData.exam,
        result: result,
    });
    await resultModel.save()

    // Remove uploaded Excel file
    fs.remove(resultData.filePath);

    // Send response
    res.json({ status: "success", message: "Result uploaded successfully" });
});
router.post("/student/results", async (req, res) => {
    try {
        const data = req.body;
        const { semester, exam, enrollmentNumber } = data;
        // Check if all required fields are provided in the request body
        if (!semester || !exam || !enrollmentNumber) {
            return res.status(400).json({ status: "error", message: "Semester, exam, and Enrollment Number are required in the request body" });
        }

        // Find the result for the given semester and exam
        const result = await Result.findOne({
            semester: semester,
            exam: exam,
            "result.enrollmentNumber": enrollmentNumber
        });

        // If result is found, find the student's marks array
        if (result) {
            const studentResult = result.result.find(student => student.enrollmentNumber === enrollmentNumber);
            if (studentResult) {
                return res.json({ marks: studentResult.marks });
            } else {
                return res.status(404).json({ status: "error", message: "Student not found with the given enrollment number" });
            }
        } else {
            return res.status(404).json({ status: "error", message: "Result not found for the given semester and exam" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", message: "Internal server error" });
    }
});
module.exports = router;
