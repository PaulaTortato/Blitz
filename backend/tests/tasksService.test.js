const sinon = require('sinon');
const { Employees, Tasks } = require('../src/models');
const tasksService = require('../src/services/tasksService');

describe('Tasks Service', () => {
  beforeEach(async () => {
    sinon.stub(Employees, 'findByPk').resolves({ email: 'teste', tasks: [] });
    sinon.stub(Tasks, 'create').resolves({ createdAt: 'teste' });
    sinon.stub(Tasks, 'findOne').resolves({ description: 'teste' });
    sinon.stub(Tasks, 'update').resolves();
    sinon.stub(Tasks, 'destroy').resolves();
  });

  afterEach(async () => {
    Employees.findByPk.restore();
    Tasks.create.restore();
    Tasks.findOne.restore();
    Tasks.update.restore();
    Tasks.destroy.restore();
  });

  it('Verifica se retorna um objeto com tasks', async () => {
    const result = await tasksService.getAll(3);
    expect(result).toHaveProperty('tasks', []);
  });

  it('Verifica se retorna um objeto com description', async () => {
    const result = await tasksService.create('desc', 'teste', 4);
    expect(result).toHaveProperty('description', 'teste');
  });

  it('Verifica se retorna um objeto com description', async () => {
    sinon.stub(Tasks, 'findByPk').resolves({ description: 'teste' });
    const result = await tasksService.update('desc', 'teste', 4);
    expect(result).toHaveProperty('description', 'teste');
    Tasks.findByPk.restore();
  });

  it('Verifica se retorna um objeto com message', async () => {
    sinon.stub(Tasks, 'findByPk').resolves({ message: 'Tarefa deletada com sucesso' });
    const result = await tasksService.update(6);
    expect(result).toHaveProperty('message', 'Tarefa deletada com sucesso');
    Tasks.findByPk.restore();
  });

  it('Verifica se retorna um objeto com code e message', async () => {
    sinon.stub(Tasks, 'findByPk').resolves({ code: 404, message: { message: 'Task does not exist' } });
    const result = await tasksService.update(6);
    expect(result).toEqual({ code: 404, message: { message: 'Task does not exist' } });
    Tasks.findByPk.restore();
  });
});