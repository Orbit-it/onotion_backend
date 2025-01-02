const express = require('express');
const { getAllItems, updateItem } = require('../controllers/inventoryController');
const router = express.Router();

router.get('/', getAllItems); // Obtenir tous les articles
router.put('/update/:id', updateItem); // Mettre à jour un article par son ID

module.exports = router;
