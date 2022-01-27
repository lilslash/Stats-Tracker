const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class BattleR extends Model {}

BattleR.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kills: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    wins: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    matches_played: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'duos',
  }
);

module.exports = BattleR;