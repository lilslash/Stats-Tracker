const BattleR = require('./BattleR');
const User = require('./User');
const Request = require('./Request');
const Shooter = require('./shooter');
const Valorant = require('./valorant');

User.hasMany(BattleR, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BattleR.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Request, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Request.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Shooter, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Shooter.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Valorant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Valorant.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = {
  User,  
  BattleR,
  Shooter,
  Request,
  Valorant
};

