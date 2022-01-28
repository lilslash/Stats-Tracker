const sequelize = require('../config/connection');
const { BattleR } = require('../models');
const seedJson = require('./battleR.json');

const seedData = async () => {
    await sequelize.sync({force: true});

    await BattleR.bulkCreate(seedJson);

    process.exit(0);
}

seedData();
