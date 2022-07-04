const loginService = require('../services/loginService');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const response = await loginService.loginCheck(email, password);
  return res.status(200).json(response);
};

module.exports = { login };