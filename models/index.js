const BattleR = require('./BattleR');
const User = require('./User');

User.hasMany(BattleR ,{
  foreignKey: 'user_id',
})
BattleR.belongsTo(User, {
  foreignKey: 'user_id',
})


module.exports = {
  User,  
  BattleR, 
};

