const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/admin/create', userController.createNewUser)
router.get('/admin/:parentId',userController.getAllUser)
router.get('/admin/getAllAgentName/:parentId',userController.getAllUserName)
router.get('/admin/:userId',userController.getAllUser)
router.put('/admin/:userId', userController.updateUser)
router.delete('/admin/:userId', userController.deleteUser)

module.exports= router;