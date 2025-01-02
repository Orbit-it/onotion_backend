const poolAdmin = require('../config/dbAdmin');
const jwt = require('jsonwebtoken');


// Récupérer tous les clients
const getAllClients = async (req, res) => {
  try {
    const result = await poolAdmin.query('SELECT * FROM clients');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching clients', error: err });
  }
};

// Créer un client
const createClient = async (req, res) => {
  const { name, email, maxUsers } = req.body;
  try {
    const result = await poolAdmin.query(
      'INSERT INTO clients (name, email, max_users) VALUES ($1, $2, $3) RETURNING *',
      [name, email, maxUsers]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error creating client', error: err });
  }
};

module.exports = {
  getAllClients,
  createClient,
};
