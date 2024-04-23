const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const { PaymentValidation } = require('../Middleware/payment.validate ');

router.post('/payment',PaymentValidation,paymentController.handlePayments)
router.get('/detail',paymentController.getPayments)
router.post('/verify',paymentController.verifyPayment)
router.get('/handleOk',paymentController.handleOK)
router.get('/handleCancel',paymentController.handleCancel)

module.exports = router