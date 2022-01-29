const BattleR = require('./BattleR');
const User = require('./User');
const Request = require('./Request');
const Shooter = require('./shooter');

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


module.exports = {
  User,  
  BattleR,
  Shooter,
  Request
};

