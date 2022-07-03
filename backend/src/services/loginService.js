const { Employee } = require('../models');
const generateToken = require('../utils/generateToken');

const loginCheck = async (email, password) => {
  const employee = await Employee.findOne({ where: { email } });
  if (!employee || employee.password !== password) return { message: 'Invalid fields' };
  const { password: hidePass, ...safeEmployee } = employee.dataValues;
  const token = generateToken(safeEmployee);
  return token;
};

module.exports = { loginCheck };