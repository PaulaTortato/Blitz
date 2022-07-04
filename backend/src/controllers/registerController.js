const registerService = require('../services/registerService');

const newEmployee = async (req, res, _next) => {
  const { firstName, lastName, email, password } = req.body;
  const response = await registerService.create(firstName, lastName, email, password);
  if (response.code) return res.status(response.code).json(response.message);
  return res.status(201).json(response);
};

module.exports = { newEmployee };