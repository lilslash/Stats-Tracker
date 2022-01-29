const router = require('express').Router();
const battleRoyaleRoutes = require('./battleR-routes');
const user = require('./userRoutes');
const request = require('./requestRoutes');

router.use('/battle-royale', battleRoyaleRoutes);
router.use('/users', user);
router.use('/request', request);

module.exports = router;