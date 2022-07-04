const { Tasks, Employees } = require('../models');

const getAll = async (id) => {
  const tasks = await Employees.findByPk(id, {
    include: [{ model: Tasks, as: 'tasks' }],
    attributes: { exclude: 'password' },
  });
  return tasks;
};

const create = async (description, status, employeeId) => {
  const newTask = await Tasks.create({ description, status, employeeId });
  const task = await Tasks.findOne({ where: { createdAt: newTask.createdAt } });
  return task;
};

const update = async (description, status, id) => {
  if (description) await Tasks.update({ description }, { where: { id } });
  if (status) await Tasks.update({ status }, { where: { id } });
  const task = await Tasks.findByPk(id);
  return task;
};

const remove = async (id) => {
  console.log(id);
  const task = await Tasks.findByPk(id);
  if (!task) return { message: 'Task does not exist' };
  await Tasks.destroy({ where: { id } });
  return { message: "Tarefa deletada com sucesso" };
};

module.exports = { getAll, create, update, remove };