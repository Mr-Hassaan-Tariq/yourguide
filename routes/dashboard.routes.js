const express = require('express');
const dashboard = require('../controllers/dashboard.controller');
const getUserData = require('../Middleware/User');
const router = express.Router();


router.get('/statistics',getUserData,dashboard.getStatistics)
router.get('/userCounts',getUserData,dashboard.getUserStatistics)

module.exports = router