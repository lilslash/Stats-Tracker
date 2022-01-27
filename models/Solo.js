const {Model, DataTypes } = require('sequelize')
const sequelize = require ('../config/connection')

class Solo extends Model {}

Solo.init(
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        wins: {
            type:DataTypes.INTEGER
        },
        kills: {
            type:DataTypes.INTEGER
        },
        matchPayed: {
            type:DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'solo'
    }
)

module.exports = Solo