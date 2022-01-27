const sequelize = require('../config/connection');
const { Model } = require('../models');
const seedJson = require('./battleR.json');

const seedData = async () => {
    await sequelize.sync({force: true});

    await Model.bulkCreate(seedJson);

    process.exit(0);
}

seedData();
