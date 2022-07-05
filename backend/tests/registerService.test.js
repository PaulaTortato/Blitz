const sinon = require('sinon');
const { Employees } = require('../src/models');
const registerService = require('../src/services/registerService');

describe('Register Service', () => {
  beforeEach(async () => {
    sinon.stub(Employees, 'create').resolves({ password: 123, dataValues: { password: 123 } });
  });

  afterEach(async () => {
    Employees.findOne.restore();
    Employees.create.restore();
  });

  it('Verifica se retorna um token', async () => {
    sinon.stub(Employees, 'findOne').resolves();
    const result = await registerService.create('email', 123);
    expect(typeof result).toBe('string');
  });

  it('Verifica se retorna um objeto de erro', async () => {
    sinon.stub(Employees, 'findOne').resolves('teste');
    const result = await registerService.create('email', 4);
    expect(result).toEqual({ code: 400, message: { message: 'User already registered' } });
  });
});