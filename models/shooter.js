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
          type: DataTypes.DECIMAL,
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
      kd: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
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