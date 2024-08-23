const express = require('express');
const tasksController = require('./controller/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const router = express.Router();

router.get('/tasks',tasksController.getAll)
router.post('/tasks',tasksMiddleware.validateBody, tasksController.createdTask)

module.exports= router;