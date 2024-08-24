const express = require('express');
const tasksController = require('./controller/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const router = express.Router();

router.get('/tasks',tasksController.getAll)
router.post('/tasks',tasksMiddleware.validateBody, tasksController.createdTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksController.updatedTask)
module.exports= router;