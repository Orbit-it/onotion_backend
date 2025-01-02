const { Pool } = require('pg');
require('dotenv').config();

// Connexion pour l'authentification avec pg
const dbAuth = new Pool({
  user: process.env.DB_ADMIN_USER,
  host: process.env.DB_ADMIN_HOST,
  database: process.env.DB_ADMIN_NAME,
  password: process.env.DB_ADMIN_PASSWORD,
  port: process.env.DB_ADMIN_PORT,
});

module.exports = dbAuth;
