// routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Route pour obtenir tous les articles d'un client
router.get('/:clientDB/items', clientController.getAllItems);

// Route pour ajouter un article pour un client
router.post('/:clientDB/items', clientController.addItem);

module.exports = router;
