// models/User.js
const { Pool } = require('pg');
const pool = require('../config/dbAdmin');

const AdminUser = {
  // Méthode pour créer un nouvel utilisateur
  register: async ({ username, email, password }) => {
    try {
      const query = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, username, email;
      `;
      const values = [username, email, password];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      throw new Error('Error registering new user');
    }
  },


  // Méthode pour vérifier si l'utilisateur existe déjà par email
  findByEmail: async (email) => {
    try {
      const query = 'SELECT * FROM users WHERE email = $1';
      const values = [email];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      throw new Error('Error finding user by email');
    }
  },
};

module.exports = AdminUser;
