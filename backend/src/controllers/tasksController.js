const tasksService = require('../services/tasksService');

const getTasks = async (req, res) => {
  const employeeId = req.employee.id;
  const response = await tasksService.getAll(employeeId);
  return res.status(200).json(response);
};

const newTask = async (req, res) => {
  const employeeId = req.employee.id;
  const { description, status } = req.body;
  const response = await tasksService.create(description, status, employeeId);
  return res.status(201).json(response);
};

const changeTask = async (req, res) => {
  const { description, status, id } = req.body;
  const response = await tasksService.update(description, status, id);
  return res.status(201).json(response);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const response = await tasksService.remove(id);
  if (response.code) return res.status(response.code).json(response.message);
  return res.status(201).json(response);
};

module.exports = {
  getTasks,
  newTask,
  changeTask,
  deleteTask,
};
