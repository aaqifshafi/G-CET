const jwt = require('jsonwebtoken');
const Student = require('../models/Students');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }

        req.studentId = decoded.studentId;
        next();
    });
};
module.exports = authenticateToken;