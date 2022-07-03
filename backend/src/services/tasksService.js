const { Tasks, Employees } = require('../models');

const getAll = async (id) => {
  const post = await Employees.findByPk(id, { include: [{ model: Tasks, as: 'tasks', attributes: {} }] });
  return post;
};

const create = async (description, status, employeeId) => {
  const newTask = await Tasks.create({ description, status, employeeId });
  const post = await Tasks.findOne({ where: { createdAt: newTask.createdAt } });
  return post;
};

module.exports = { getAll, create };