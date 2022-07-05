const express = require('express');
const registerController = require('../../controllers/registerController');
const registerValidation = require('../../middlewares/registerValidation');

const registerRouter = express.Router();

registerRouter.post('/', registerValidation, registerController.newEmployee);

module.exports = registerRouter;
