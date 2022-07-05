const { Employees } = require('../models');
const generateToken = require('../utils/generateToken');

const create = async (firstName, lastName, email, password) => {
  const employeeExists = await Employees.findOne({ where: { email } });
  if (employeeExists) return { code: 400, message: { message: 'User already registered' } };
  const newEmployee = await Employees.create({
    firstName,
    lastName,
    email,
    password,
  });
  const { password: hidePass, ...safeEmployee } = newEmployee.dataValues;
  const token = generateToken(safeEmployee);
  return token;
};

module.exports = { create };
