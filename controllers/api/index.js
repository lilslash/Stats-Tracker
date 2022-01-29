const router = require('express').Router();
const battleRoyaleRoutes = require('./battleR-routes');
const user = require('./userRoutes');

router.use('/battle-royale', battleRoyaleRoutes);
router.use('/users', user);

module.exports = router;