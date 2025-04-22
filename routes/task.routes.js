const express = require('express');
const taskController = require('../controllers/task.controller')
const router = express.Router();

router.post('/',taskController.createTask);

module.exports = router;
