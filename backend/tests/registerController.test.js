const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/api');

const registerService = require('../src/services/registerService');

// Referência para mock de middleware: https://stackoverflow.com/questions/56014527/how-to-mock-a-middleware-in-supertest
jest.mock('../src/middlewares/registerValidation', () => jest.fn((_req, _res, next) => next()));

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
      expect(result.statusCode).toBe(201);
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