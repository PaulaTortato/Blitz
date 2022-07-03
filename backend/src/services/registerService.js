const { Employee } = require('../models');
const generateToken = require('../utils/generateToken');

const create = async (firstName, lastName, email, password) => {
  const employeeExists = await Employee.findOne({ where: { email } });
  if (employeeExists) return { message: 'User already registered' };
  const newEmployee = await Employee.create({ firstName, lastName, email, password });
  const { password: hidePass, ...safeEmployee } = newEmployee.dataValues;
  const token = generateToken(safeEmployee);
  return token;
};

module.exports = { create };