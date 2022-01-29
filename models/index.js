const BattleR = require('./BattleR');
const Shooter = require('./shooter');
const User = require('./User');

User.hasMany(BattleR, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BattleR.belongsTo(User, {
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
};

