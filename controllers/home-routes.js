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
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// TODO GET blogpost by ID
router.get('/singlepost/:id', async (req, res) => {
    try {
        const blogPostData = await Blogpost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                }
            ]
        });

        const blogpost = blogPostData.get({ plain: true });

        res.render('singlepost', {
            ...blogpost,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

// TODO GET dashboard that displays users posts


// TODO GET login route



module.exports = router;