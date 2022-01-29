const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const battleR = require('./api/battleR-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/', battleR);

router.use((req, res) => {
  res.send("<h1>Incorrect Route</h1>")
});

module.exports = router;