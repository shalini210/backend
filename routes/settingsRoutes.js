const express = require('express');
const { updateSettings } = require('../controllers/settingsController');

const router = express.Router();

router.put('/:id', updateSettings);

module.exports = router;
