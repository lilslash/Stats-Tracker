const router = require('express').Router();
const { BattleR } = require('../../models');

// Find all Duos stats
// router.get('/', async (req, res) => {
//     try {
//       const duosData = await Duos.findAll();
//       res.status(200).json(duosData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// Create new battle royale stats
router.post('/', async (req, res) => {
    try {
      const battleRoyaleData = await BattleR.create(req.body);
      res.status(200).json(battleRoyaleData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
