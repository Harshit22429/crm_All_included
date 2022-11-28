const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController')

router.post('/admin', customerController.createNewCustomer);
router.get('/:salesAgent',customerController.getAllCustomer);
router.put('/:custId',customerController.updateCustomer);
router.delete('/admin/:custId',customerController.deleteCustomer);




module.exports= router;