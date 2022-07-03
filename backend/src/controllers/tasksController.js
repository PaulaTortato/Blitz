const tasksService = require('../services/tasksService');

const getTasks = async (req, res, _next) => {
  const employeeId = req.employee.id;
  const response = await tasksService.getAll(employeeId);
  return res.status().json(response);
};

const newTask = async (req, res, _next) => {
  const employeeId = req.employee.id;
  const { description, status } = req.body;
  const response = await tasksService.create(description, status, employeeId);
  return res.status().json(response);
};

module.exports = { getTasks, newTask };