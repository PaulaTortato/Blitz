require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

module.exports = generateToken;