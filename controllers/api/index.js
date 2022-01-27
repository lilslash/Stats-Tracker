const router = require('express').Router();
const battleRoyaleRoutes = require('./battleR-routes');
const user = require('./userRoutes');

router.use('/battleRoyale', battleRoyaleRoutes);
router.use('./userRoutes', user);

module.exports = router;