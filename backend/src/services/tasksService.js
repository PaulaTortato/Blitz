const { Tasks, Employee } = require('../models');

const getAll = async (id) => {
  const post = await Tasks.findByPk(id, { include: [{ model: Employee, as: 'employee', attributes: { exclude: 'password' } }] });
  return post;
};

const create = async (description, status, employeeId) => {
  const newTask = await Tasks.create({ description, status, employeeId });
  const post = await Tasks.findOne({ where: { published: newTask.createdAt } });
  return post;
};

module.exports = { getAll, create };