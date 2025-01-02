// server.js
const app = require('./src/app'); // Importer l'application Express depuis app.js
const http = require('http');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

// Récupérer le port depuis les variables d'environnement ou utiliser 3000 par défaut
const port = process.env.PORT || 3000;

// Créer un serveur HTTP avec l'application Express
const server = http.createServer(app);

// Démarrer le serveur
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
