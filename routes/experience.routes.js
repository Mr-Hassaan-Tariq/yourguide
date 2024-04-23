
const express = require('express');
const experienceController = require('../controllers/experience.controller');
const ExperieceValidate = require('../Middleware/Experiece.validate');
const router = express.Router();
const multer = require('multer');
const getUserData = require('../Middleware/User');
const upload = require('../Multers/experience.multer');

router.post('/experience', getUserData, upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
    { name: 'img4', maxCount: 1 },
]), ExperieceValidate.addExperiece, experienceController.addExperiece)
router.get('/experience', experienceController.getExperience)
router.get('/experience-count',getUserData, experienceController.getExperienceCount)
router.get('/experience/:experienceId', experienceController.getExperienceById)

module.exports = router