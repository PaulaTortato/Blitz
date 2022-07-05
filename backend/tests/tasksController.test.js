const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/api');

const tasksService = require('../src/services/tasksService');

describe('Tasks controller', () => {

  describe('O token deve ser retornado corretamente', () => {
    beforeAll(async () => {
      sinon.stub(tasksService, 'getAll').resolves('teste');
    });

    afterAll(async () => {
      tasksService.getAll.restore();
    });

    it('Verifica se o status retornado é correto', async () => {
      const result = await request(app).get('/tasks').set('Authorization', token);
      expect(result.statusCode).toBe(200);
    });

    it('Verifica se um objeto com as tasks é retornado', async () => {
      const result = await request(app).get('/tasks').set('Authorization', token);
      expect(result.body).toHaveProperty('tasks');
    });
  });
});