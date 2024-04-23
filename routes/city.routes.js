const express = require('express');
const cityController = require('../controllers/city.controller');
const cityValidation = require('../Middleware/city.validation');
const router = express.Router();
const upload  = require('../Multers/multer')

router.get('/getMapDataBySearch', cityController.getMapDataBySearch)
router.get('/citiesOfPakistan', cityController.getCitiesByCountryName)
router.post('/city', upload.single('file'), cityValidation.addCity, cityController.addCity)
router.get('/city', cityController.geCity)

module.exports = router