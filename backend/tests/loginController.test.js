const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/api');

const loginService = require('../src/services/loginService');

describe('Login controller', () => {

  describe('O token deve ser retornado corretamente', () => {
    beforeAll(async () => {
      sinon.stub(loginService, 'loginCheck').resolves('teste');
    });

    afterAll(async () => {
      loginService.loginCheck.restore();
    });

    it('Verifica se o status retornado é correto', async () => {
      const result = await request(app).post('/login');
      expect(result.statusCode).toBe(200);
    });

    it('Verifica se o token é retornado', async () => {
      const result = await request(app).post('/login');
      expect(typeof result.body).toBe('string');
    });
  });

  describe('Deve ser retornado uma menssagem de erro', () => {
    beforeAll(async () => {
      sinon.stub(loginService, 'loginCheck').resolves({ code: 400, message: 'erro' });
    });

    afterAll(async () => {
      loginService.loginCheck.restore();
    });

    it('Verifica se o status retornado é correto', async () => {
      const result = await request(app).post('/login');
      expect(result.statusCode).toBe(400);
    });

    it('Verifica se o erro é retornado', async () => {
      const result = await request(app).post('/login');
      expect(result.body).toBe('erro');
    });
  });
});