const router = require('express').Router();
const { BattleR, User } = require('../../models');
const withAuth = require('../../utils/auth');


// Find all Duos stats
router.get('/', async (req, res) => {
    try {
      const battleRoyaleData = await BattleR.findAll();
      res.status(200).json(battleRoyaleData);

router.get('/', async (req, res) => {
    try {
      const duosData = await BattleR.findAll();
      res.status(200).json(duosData);

    } catch (err) {
      res.status(500).json(err);
    }
  });

// Create new battle royale stats
router.post('/', withAuth, async (req, res) => {
    try {
      const battleRoyaleData = await BattleR.create({
        ...req.body,
        user_id: req.session.user_id
      });

      res.status(200).json(battleRoyaleData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
