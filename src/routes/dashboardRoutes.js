const express = require('express');
const { getInventoryProgress } = require('../controllers/dashboardController');
const router = express.Router();

router.get('/progress', getInventoryProgress); // Obtenir la progression

module.exports = router;
