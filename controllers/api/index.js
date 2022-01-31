const router = require('express').Router();
const battleRoyaleRoutes = require('./battleR-routes');
const user = require('./userRoutes');
const request = require('./requestRoutes');
const shooter = require('./shooter-routes')
const valorant = require('./valorant-routes')

router.use('/battle-royale', battleRoyaleRoutes);
router.use('/users', user);
router.use('/request', request);
router.use('/shooter', shooter);
router.use('/valorant', valorant);

module.exports = router;