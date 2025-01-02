const Inventory = require('../models/Inventory');

// Obtenir la progression de l'inventaire
exports.getInventoryProgress = async (req, res) => {
  try {
    const totalItems = await Inventory.count();
    const inventoriedItems = await Inventory.count({
      where: { nouvelle_qté: { [Op.ne]: null } },
    });

    const progress = (inventoriedItems / totalItems) * 100;
    res.status(200).json({ totalItems, inventoriedItems, progress });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching progress', error });
  }
};
