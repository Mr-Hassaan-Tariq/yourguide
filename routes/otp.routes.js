const express = require('express');
const router = express.Router();
const upload  = require('../Multers/multer');
const otpController = require('../controllers/otp.controller');
const otpValidation = require('../Middleware/otp.validation');

router.patch('/otpverify',otpValidation.validateData, otpController.verifyOtp)

module.exports = router