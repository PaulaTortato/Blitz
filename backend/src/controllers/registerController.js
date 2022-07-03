const registerService = require('../services/registerService');

const newEmployee = async (req, res, _next) => {
  const { firstName, lastName, email, password } = req.body;
  const response = await registerService.create(firstName, lastName, email, password);
  return res.status(201).json(response);
};

module.exports = { newEmployee };