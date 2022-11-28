const despositionController = require('../controller/despositionController');
const express = require('express');
const router = express.Router();

router.post('/:lead_id',despositionController.addDespositon);
router.get('/:lead_id',despositionController.getAllDesposition)

module.exports = router;