const getClientDBConnection = require('../config/dbClient');

// Récupérer tous les articles d'un client
const getAllItems = async (req, res) => {
  const { clientId } = req.params;
  const clientDb = getClientDBConnection(clientId);
  
  try {
    const result = await clientDb.query('SELECT * FROM items');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching items', error: err });
  }
};

// Ajouter un article
const addItem = async (req, res) => {
  const { clientId } = req.params;
  const { name, quantity, barcode } = req.body;
  const clientDb = getClientDBConnection(clientId);
  
  try {
    const result = await clientDb.query(
      'INSERT INTO items (name, quantity, barcode) VALUES ($1, $2, $3) RETURNING *',
      [name, quantity, barcode]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error adding item', error: err });
  }
};

module.exports = {
  getAllItems,
  addItem,
};
