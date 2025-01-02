const { DataTypes } = require('sequelize');
const db = require('../config/dbAdmin');

const Inventory = db.define(
    'Inventory',
    {
      ref_interne: { type: DataTypes.STRING, allowNull: false },
      ref_fourn: { type: DataTypes.STRING, allowNull: true },
      designation: { type: DataTypes.STRING, allowNull: false },
      fournisseur: { type: DataTypes.STRING, allowNull: true },
      prix: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
      unite: { type: DataTypes.STRING, allowNull: true },
      qte_pre_inventaire: { type: DataTypes.INTEGER, allowNull: true },
      nouvelle_qte: { type: DataTypes.INTEGER, allowNull: true },
      code_emplacement: { type: DataTypes.STRING, allowNull: true },
      code_barre: { type: DataTypes.STRING, allowNull: true, unique: true },
      date_creation: { type: DataTypes.DATE, allowNull: true, field: 'date_creation' },
      date_modification: { type: DataTypes.DATE, allowNull: true, field: 'date_modification' },
    },
    {
      freezeTableName: true, // Pas de pluralisation
      tableName: 'inventory', // Nom explicite de la table
      timestamps: false, // Désactive createdAt et updatedAt
    }
  );
  
  
  module.exports = Inventory;
  
