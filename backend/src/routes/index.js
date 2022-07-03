import { Router } from 'express';
const loginRouter = require('./login');
const registerRouter = require('./register');
const tasksRouter = require('./tasks');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/tasks', tasksRouter);

module.exports = router;