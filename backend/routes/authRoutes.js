const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/Students');
const Teacher = require('../models/Teachers');
const Feedback = require('../models/Feedback');
const router = express.Router();
const authenticateToken = require('./authMiddleware');
require('dotenv').config();



const app = express();
// Student Sign Up Route 
router.post('/student/signup', async (req, res) => {
    try {
        // Extract student data from request body
        const { firstName, lastName, phoneNumber, email, password, program } = req.body;

        // Check if the email is already registered
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Email is already registered', success: false });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new student instance
        const newStudent = new Student({
            firstName,
            lastName,
            phoneNumber,
            email,
            password: hashedPassword,
            program,
        });

        // Save the new student to the database
        await newStudent.save();

        // Return success response
        res.status(201).json({ message: 'Student signed up successfully', success: true });
    } catch (error) {
        console.error('Error in student sign-up:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
//Route for Student Login
router.post('/student/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the student
        const student = await Student.findOne({ email });

        if (!student) {
            return res.status(400).json({ message: 'Invalid credentials', success: false });
        }

        // Verify the password
        const isPasswordValid = await bcrypt.compare(password, student.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid Credentials' });
        }

        // Generate a JSON Web Token
        const token = jwt.sign({ studentId: student._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, message: 'Login successful', authorization: token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
    router.get('/student/verifyStudent', authenticateToken, async (req, res) => {
        try {
            const student = await Student.findById(req.studentId).select('-password');

            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }

            res.status(200).json({ success: true, student });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// Teacher Sign Up Route
router.post('/admin/signup', async (req, res) => {
    try {
        // Extract student data from request body
        const { firstName, lastName, phoneNumber, email, password, department } = req.body;

        // Check if the email is already registered
        const existingTeacher = await Teacher.findOne({ email });
        if (existingTeacher) {
            return res.status(400).json({ message: 'Email is already registered', success: false });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new student instance
        const newTeacher = new Teacher({
            firstName,
            lastName,
            phoneNumber,
            email,
            password: hashedPassword,
            department,
        });

        // Save the new student to the database
        await newTeacher.save();

        // Return success response
        res.status(201).json({ message: 'Teacher signed up successfully', success: true });
    } catch (error) {
        console.error('Error in teacher sign-up:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Teacher Login Route
router.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the teacher
        const teacher = await Teacher.findOne({ email });

        if (!teacher) {
            return res.status(400).json({ message: 'Invalid credentials', success: false });
        }

        // Verify the password
        const isPasswordValid = await bcrypt.compare(password, teacher.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid Credentials' });
        }

        // Generate a JSON Web Token
        const token = jwt.sign({ teacherId: teacher._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, message: 'Login successful', authorization: token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
    router.get('/admin/verifyAdmin', authenticateToken, async (req, res) => {
        try {
            const teacher = await Teacher.findById(req.teacherId).select('-password');

            if (!teacher) {
                return res.status(404).json({ error: 'Teacher not found' });
            }
            const feedback = await Feedback.find();
            res.status(200).json({ success: true, teacher, feedback });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


module.exports = router;


