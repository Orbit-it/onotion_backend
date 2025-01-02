const Inventory = require('../models/Inventory');

// Obtenir tous les articles
exports.getAllItems = async (req, res) => {
  try {
    const items = await Inventory.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};

// Mettre à jour un article

exports.updateItem = async (req, res) => {
  const { id } = req.params; // ID de l'article
  const updates = req.body; // Champs à mettre à jour

  try {
    const [updated] = await Inventory.update(updates, {
      where: { id },
    });

    if (updated === 0) {
      return res.status(404).json({ message: "Article non trouvé." });
    }

    const updatedItem = await Inventory.findByPk(id);
    res.status(200).json(updatedItem); // Renvoie l'article mis à jour
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur lors de la mise à jour.", error });
  }
};
