const express = require('express');
const tokenValidation = require('../../middlewares/tokenValidation');
const taskValidation = require('../../middlewares/taskValidation');
const tasksController = require('../../controllers/tasksController');
const changeValidation = require('../../middlewares/changeValidation');

const tasksRouter = express.Router();

tasksRouter.get('/', tokenValidation, tasksController.getTasks);
tasksRouter.post('/', tokenValidation, taskValidation, tasksController.newTask);
tasksRouter.put('/', tokenValidation, changeValidation, tasksController.changeTask);
tasksRouter.delete('/', tokenValidation, taskValidation, tasksController.deleteTask);

module.exports = tasksRouter;