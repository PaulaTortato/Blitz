require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Employee } = require('../models');

const tokenValidation = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const validEmployee = await Employee.findOne({ where: { email: decoded.data.email } });
    if (!validEmployee) return res.status(401).json({ message: 'Invalid user' });
    req.employee = validEmployee;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;