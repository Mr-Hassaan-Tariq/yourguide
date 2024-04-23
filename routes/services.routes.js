const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/services.controller');
const serviceValidation = require('../Middleware/services.validation');
const getUserData = require('../Middleware/User');

router.post('/service',getUserData,serviceValidation.validateData, ServiceController.addServices)
router.get('/service', ServiceController.getServices)

module.exports = router