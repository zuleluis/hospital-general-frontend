const express = require('express');
const router = express.Router();

const pacientesController = require('../controllers/pacientesController')

router.get('/', pacientesController.index);

module.exports = router;