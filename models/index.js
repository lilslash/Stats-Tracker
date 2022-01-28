const BattleR = require('./BattleR');
const User = require('./User');

User.hasMany(BattleR, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BattleR.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = {
  User,  
  BattleR, 
};

