const router = require('express').Router();
const { Blogpost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Add a comment to a blogpost
router.post('/singlepost/:id', withAuth, async (req, res) => {
    console.log('found route');
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(req.body);
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;