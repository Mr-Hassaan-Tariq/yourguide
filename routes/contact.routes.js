const express = require('express');
const contactController = require('../controllers/contact.controller');
const contactValidation = require('../Middleware/contact.validation');
const getUserData = require('../Middleware/User');
const router = express.Router();

router.post('/contact', contactValidation.addContact,contactController.addContact)

router.get('/contact', getUserData,contactController.getContact)


router.patch('/:contactId', getUserData,contactValidation.updateContact,contactController.update)

module.exports = router