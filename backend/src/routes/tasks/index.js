const express = require('express');
const tokenValidation = require('../../middlewares/tokenValidation');
const taskValidation = require('../../middlewares/taskValidation');
const tasksController = require('../../controllers/tasksController');

const tasksRouter = express.Router();

tasksRouter.get('/', tokenValidation, tasksController.getTasks);
tasksRouter.post('/', tokenValidation, taskValidation, tasksController.newTask);
tasksRouter.put('/', tokenValidation, taskValidation, tasksController.changeTask);
tasksRouter.delete('/:id', tokenValidation, tasksController.deleteTask);

module.exports = tasksRouter;