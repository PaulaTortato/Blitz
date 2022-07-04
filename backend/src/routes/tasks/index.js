const express = require('express');
const tokenValidation = require('../../middlewares/tokenValidation');
const taskValidation = require('../../middlewares/taskValidation');
const tasksController = require('../../controllers/tasksController');
const changeValidation = require('../../middlewares/changeValidation');

const tasksRouter = express.Router();

tasksRouter.delete('/:id', tokenValidation, tasksController.deleteTask);
tasksRouter.get('/', tokenValidation, tasksController.getTasks);
tasksRouter.post('/', tokenValidation, taskValidation, tasksController.newTask);
tasksRouter.put('/', tokenValidation, changeValidation, tasksController.changeTask);

module.exports = tasksRouter;