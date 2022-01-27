const router = require('express').Router();
const { Player, BattleR } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const battleData = await BattleR.findAll();

        const battles = battleData.map((battle) => battle.get({plain: true}));

        res.render('homepage', {
            battles,
            logged_in: req.session.logged_in
        });

        console.log(battles);
    } catch (err) {
        res.status(500).json(err);
    }
})