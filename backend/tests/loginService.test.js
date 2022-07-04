const sinon = require('sinon');
const { Employees } = require('../src/models');
const loginService = require('../src/services/loginService');

describe('Login Service', () => {
  beforeEach(async () => {
    sinon.stub(Employees, 'findOne').resolves({ password: 123, dataValues: { password: 123 } });
  });

  afterEach(async () => {
    Employees.findOne.restore();
  });

  it('Verifica se retorna um token', async () => {
    const result = await loginService.loginCheck('email', 123);
    expect(typeof result).toBe('string');
  });

  it('Verifica se retorna um objeto de erro', async () => {
    const result = await loginService.loginCheck('email', 4);
    expect(result).toEqual({ code: 400, message: { message: 'Invalid fields' } });
  });
});