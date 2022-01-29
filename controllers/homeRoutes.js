const router = require('express').Router();
const { User, BattleR } = require('../models');
const Request = require('../models/Request');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const battleData = await BattleR.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const battles = battleData.map((battle) => battle.get({ plain: true }));

    res.render('login', {
      battles,
      logged_in: req.session.logged_in
    });

    console.log(battles);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/battle-royale/:id', async (req, res) => {
  try {
    const battleData = await BattleR.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const battle = battleData.get({plain:true});

    res.render('battle', {
      ...battle,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{model: BattleR}],
    });

    
    const user = userData.get({ plain: true });

    console.log(user);

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/request', withAuth, async (req, res) => {
  res.render('request')
});

module.exports = router;