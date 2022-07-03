const express = require('express');
const registerController = require('../../controllers/registerController');

const registerRouter = express.Router();

registerRouter.post('/', registerController.newEmployee);

module.exports = registerRouter;