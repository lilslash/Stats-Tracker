const router = require('express').Router();
const { User, Shooter } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
    const shooterData = await Shooter.findAll();
    res.status(200).json(shooterData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new shooter stats
router.post('/', withAuth, async (req, res) => {
  try {
    const shooterData = await Shooter.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(shooterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const shooterData = await Shooter.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });
    if (!shooterData) {
      res.status(404).json({ message: 'No stat block found with this id'});
      return;
    }
    res.status(200).json(shooterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;