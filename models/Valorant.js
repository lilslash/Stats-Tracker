const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Valorant extends Model {}

Valorant.init(
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
      character: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kills: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      deaths: {
          type: DataTypes.INTEGER,
          allowNull: true,
  
      },
      assist: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      game_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      modelName: 'Valorant',
    }
  );
  module.exports = Valorant
