const express = require('express');
const router = express.Router();
const { calculateWaterUsage } = require('../controllers/calculator');

// POST route to calculate water usage
router.post('/', calculateWaterUsage);

module.exports = router;
