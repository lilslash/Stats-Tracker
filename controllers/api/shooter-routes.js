const router = require('express').Router();
const { User, Shooter } = require('../../models');
const withAuth = require('../../utils/auth');
const _ = require('lodash');


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
    let div = _.divide(req.body.kills, req.body.deaths);
    let k_d = _.floor(div, 2);
    const shooterData = await Shooter.create({
      ...req.body,
      kd: k_d,
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