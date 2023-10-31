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
            loggedIn: true,// req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// TODO GET blogpost by ID
router.get('/posts/:id', async (req, res) => {
    try {
        res.render("singlepost",{
            blogpost: {
                title: "this is title",
                User: {
                    user_name:"bob123",
                    created_at: new Date()
                },
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sed sunt earum quae alias. Quae ipsa exercitationem quibusdam magnam maxime, quis officiis praesentium sequi officia iure ea? Pariatur, excepturi enim."
            }
        })

    } catch (err) {
        
    }
})

// TODO GET dashboard that displays users posts


// TODO GET login route



module.exports = router;