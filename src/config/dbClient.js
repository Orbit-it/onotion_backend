const { Pool } = require('pg');

// Connexion à la base de données d'un client spécifique
const getClientDBConnection = (clientId) => {
  // Logique pour récupérer les informations spécifiques à un client
  // (par exemple, via un enregistrement dans la base admin ou dans un service tiers)
  return new Pool({
    user: process.env[`DB_CLIENT_${clientId}_USER`],
    host: process.env[`DB_CLIENT_${clientId}_HOST`],
    database: process.env[`DB_CLIENT_${clientId}_NAME`],
    password: process.env[`DB_CLIENT_${clientId}_PASSWORD`],
    port: process.env[`DB_CLIENT_${clientId}_PORT`],
  });
};

module.exports = getClientDBConnection;
