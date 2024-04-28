const jwt = require('jsonwebtoken');
require('dotenv').config();
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        if (decoded.studentId) {
            req.studentId = decoded.studentId;
        } else if (decoded.teacherId) {
            req.teacherId = decoded.teacherId;
        } else {
            return res.status(403).json({ error: 'Invalid token. User ID not found.' });
        }



        next();
    });
};
module.exports = authenticateToken;