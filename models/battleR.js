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
        allowNull: true,
    },
    wins: {
        type: DataTypes.INTEGER,
        allowNull: true,

    },
    matches_played: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'battleR',
  }
);

module.exports = BattleR;