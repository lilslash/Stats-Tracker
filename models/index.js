const BattleR = require('./BattleR');
const User = require('./User');
const Request = require('./Request');

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




module.exports = {
  User,  
  BattleR, 
};

