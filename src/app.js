// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dbAdmin = require('./config/dbAdmin'); // Connexion à la base de données admin
const dbClient = require('./config/dbClient'); // Connexion dynamique à la base de données client
const adminRoutes = require('./routes/adminRoutes'); // Routes pour la gestion des administrateurs
const clientRoutes = require('./routes/clientRoutes'); // Routes pour la gestion des articles et des clients
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require('./middlewares/authMiddleware'); // Middleware d'authentification
const inventoryRoutes = require('./routes/inventoryRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');




dotenv.config(); // Charger les variables d'environnement à partir du fichier .env

// Initialisation de l'application Express
const app = express();

// Middleware
app.use(cors()); // Permet les requêtes cross-origin
app.use(bodyParser.json()); // Pour parser le JSON dans les requêtes
app.use(bodyParser.urlencoded({ extended: true })); // Pour parser les données de formulaires URL encodées

// Routes protégées par l'authentification
//app.use('/api/admin', authMiddleware, adminRoutes); // Middleware d'authentification pour les routes admin
//app.use('/api/client', authMiddleware, clientRoutes); // Middleware d'authentification pour les routes client
app.use("/api/auth", authRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Routes non protégées, comme les routes publiques
// Exemple : app.use('/api/public', publicRoutes);

module.exports = app; // Exporter l'app pour l'utiliser dans server.js
