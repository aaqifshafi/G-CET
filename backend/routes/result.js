require("dotenv").config();
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer.middleware');
const Result = require('../models/Results');
const fs = require('fs-extra');
const ExcelJS = require('exceljs'); // Import exceljs package

router.post("/admin/upload-result", upload.single("file"), async (req, res) => {
    const resultData = {
        originalName: req.file.originalname,
        semester: req.body.semester,
        department: req.body.department,
        exam: req.body.exam,
        filePath: req.file.path
    }

    try {
        // Create a workbook reader
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(resultData.filePath);

        // Get the first worksheet
        const worksheet = workbook.getWorksheet(1);

        // Extract subjects from the first row (excluding non-header columns like enrollment number)
        const subjects = [];
        worksheet.getRow(1).eachCell((cell, colNumber) => {
            if (colNumber > 1) {
                subjects.push(cell.value);
            }
        });

        // Map subjects and marks for each student
        const result = [];
        worksheet.eachRow((row, rowNum) => {
            if (rowNum > 1) { // Exclude header row
                const marksArray = [];
                row.eachCell((cell, colNumber) => {
                    if (colNumber > 1) { // Exclude enrollmentNumber column
                        marksArray.push({
                            subject: subjects[colNumber - 2], // Adjust for 0-based index
                            marks: cell.value
                        });
                    }
                });

                result.push({
                    enrollmentNumber: row.getCell(1).value, // Assuming enrollmentNumber is in first column
                    exam: resultData.exam,
                    marks: marksArray
                });
            }
        });

        // Save result to database
        const resultModel = await Result.create({
            semester: resultData.semester,
            department: resultData.department,
            exam: resultData.exam,
            result: result,
        });
        await resultModel.save();

        // Remove uploaded Excel file
        await fs.remove(resultData.filePath);

        // Send response
        res.json({ status: "success", message: "Result uploaded successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", message: "Internal server error" });
    }
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
