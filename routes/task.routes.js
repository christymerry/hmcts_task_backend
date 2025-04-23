const express = require('express');
const taskController = require('../controllers/task.controller')
const router = express.Router();

router.post('/',taskController.createTask);
router.get('/',taskController.getAllTask);
router.get('/:id',taskController.getTaskById);
router.get('/:id',taskController.updateTaskById)


module.exports = router;
