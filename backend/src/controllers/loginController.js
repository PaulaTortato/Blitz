const loginService = require('../services/loginService');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const response = await loginService.loginCheck(email, password);
  res.status().json(response);
};

module.exports = { login };