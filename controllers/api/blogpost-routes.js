// TODO Create, update and delete blogposts
const router = require('express').Router();
const { Blogpost, Comment } = require('../../models');

// Create a blogpost
router.post('/blogpost/:id', async (req, res) => {
    try {
      const newBlogpost = await Blogpost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(req.body);
      res.status(200).json(newBlogpost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Update a blogpost
router.put('/blogpost/:id', async (req, res) => {
    try {
      const blogpostData = await Blogpost.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id, 
        },
      });

      if (!blogpostData) {
        res.status(404).json({ message: 'No blog post found with this ID!' });
        return;
      }

      res.status(200).json(blogpostData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Delete a blogpost
router.delete('/blogpost/:id', async (req, res) => {
    try {
      const blogpostData = await Blogpost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id, 
        },
      });

      if (!blogpostData) {
        res.status(404).json({ message: 'No blog post found with this ID!' });
        return;
      }

      res.status(200).json(blogpostData);
    } catch (err) {
      res.status(500).json(err);
    }
});  

module.exports = router;

