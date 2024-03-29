const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const verifyRoles = require('../middlewares/verifyRoles');
const Role_List = require('../config/Role_List')
const {verifyJwt} = require('../middlewares/verifyJwt');

// router.use(verifyJwt)
// router.use(verifyRoles(Role_List.Admin))
router.post('/admin/create',verifyJwt,  userController.createNewUser)
router.get('/admin/:parentId',verifyJwt, userController.getAllUser)
router.get('/admin/getAllAgentName/:parentId',verifyJwt, userController.getAllUserName)
router.get('/admin/:userId',verifyJwt, userController.getAllUser)
router.put('/admin/:userId',verifyJwt, userController.updateUser)
router.delete('/admin/:userId',verifyJwt, userController.deleteUser)

module.exports= router;