const router = require('express').Router();
const duosRoutes = require('./duos-routes');

router.use('/duos', duosRoutes);

module.exports = router;