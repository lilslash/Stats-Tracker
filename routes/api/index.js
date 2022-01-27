const router = require('express').Router();
const battleRolyaleRoutes = require('./battleR-routes');

router.use('/battleRoyale', battleRolyaleRoutes);

module.exports = router;