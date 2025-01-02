const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Routes pour les clients
router.get('/clients', adminController.getAllClients); // Récupérer tous les clients
router.post('/clients', adminController.createClient); // Créer un client

module.exports = router;
