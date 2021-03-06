const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginService.loginCheck(email, password);
  if (response.code) return res.status(response.code).json(response.message);
  return res.status(200).json(response);
};

module.exports = { login };
