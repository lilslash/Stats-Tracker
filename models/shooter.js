const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Shooter extends Model {}

Shooter.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      game_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'shooter',
    }
  );
  module.exports = Shooter