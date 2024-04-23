const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const userValidation = require('../Middleware/user.validation');
const hostValidation = require('../Middleware/host.validation');
const getUserData = require('../Middleware/User');
const multer = require('../Multers/hostFile.multer')
const profileMulter = require('../Multers/user.profile.multer')


router.post('/user',userValidation.checkUserValidation,UserController.addUser)
router.post('/requestForHost',getUserData,multer.single('certificate'),hostValidation.checkUserValidation,UserController.requestToMakeHost)
router.post('/login',UserController.login)

router.get('/hostrequest',getUserData,UserController.getUserRequest)
router.get('/userDetail/:userId',UserController.getUserDatail)
router.get('/getAllUsers',UserController.getAllUsers)

router.patch('/:userId',getUserData,UserController.updateUser)
router.patch('/profile/:userId',getUserData,profileMulter.single('profile'),UserController.updateUserProfile)
router.patch('/makeHost/:userId',getUserData,UserController.makeHost)
router.patch('/reject-as-host/:userId',getUserData,UserController.rejectHost)


module.exports = router;