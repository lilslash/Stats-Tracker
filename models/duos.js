const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Duos extends Model {}

Duos.init(
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
        validate: {
          isKills: NUMBER
        }
    },
    wins: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isWins: NUMBER
        }
    },
    matches_played: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isMatches: NUMBER
        }
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

module.exports = Duos;