const router = require('express').Router();
const { Request, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Create game request
router.post('/', withAuth, async (req, res) => {
    try {
        const requestData = await Request.create({
            ...req.body,
            user_id: req.session.user_id
        });
        
        res.status(200).json(requestData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;