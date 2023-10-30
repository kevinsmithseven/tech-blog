const router = require('express').Router();
const { Blogpost, User } = require('../models');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
    try {
        const blogpostData = await Blogpost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                }
            ]
        });

        const blogposts = blogpostData.map((blogpost) =>
            blogpost.get({ plain: true })
        );

        res.render('homepage', {
            blogposts,
            // loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;