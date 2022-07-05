const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/api');

const registerService = require('../src/services/registerService');

describe('Register controller', () => {

  describe('O token deve ser retornado corretamente', () => {
    beforeAll(async () => {
      sinon.stub(registerService, 'create').resolves('teste');
    });

    afterAll(async () => {
      registerService.create.restore();
    });

    it('Verifica se o status retornado é correto', async () => {
      const result = await request(app).post('/register');
      expect(result.statusCode).toBe(200);
    });

    it('Verifica se o token é retornado', async () => {
      const result = await request(app).post('/register');
      expect(typeof result.body).toBe('string');
    });
  });

  describe('Deve ser retornado uma menssagem de erro', () => {
    beforeAll(async () => {
      sinon.stub(registerService, 'create').resolves({ code: 400, message: 'erro' });
    });

    afterAll(async () => {
      registerService.create.restore();
    });

    it('Verifica se o status retornado é correto', async () => {
      const result = await request(app).post('/register');
      expect(result.statusCode).toBe(400);
    });

    it('Verifica se o erro é retornado', async () => {
      const result = await request(app).post('/register');
      expect(result.body).toBe('erro');
    });
  });
});