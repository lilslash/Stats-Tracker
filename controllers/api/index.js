const router = require('express').Router();
const battleRoyaleRoutes = require('./battleR-routes');

router.use('/battleRoyale', battleRoyaleRoutes);

module.exports = router;