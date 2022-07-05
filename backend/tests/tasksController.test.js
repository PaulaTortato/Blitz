const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/api');

jest.mock('../src/middlewares/tokenValidation', () => jest.fn((req, _res, next) => { req.employee.id = 5; next(); }));
jest.mock('../src/middlewares/taskValidation', () => jest.fn((_req, _res, next) => next()));

const tasksService = require('../src/services/tasksService');

describe('Tasks controller', () => {

  describe('O token deve ser retornado corretamente', () => {
    beforeAll(async () => {
      sinon.stub(tasksService, 'getAll').resolves({ tasks: 'teste' });
    });

    afterAll(async () => {
      tasksService.getAll.restore();
    });

    it('Verifica se o status retornado é correto', async () => {
      const result = await request(app).get('/tasks');
      expect(result.statusCode).toBe(200);
    });

    it('Verifica se um objeto com as tasks é retornado', async () => {
      const result = await request(app).get('/tasks');
      expect(result.body).toHaveProperty('tasks', 'teste');
    });
  });
});