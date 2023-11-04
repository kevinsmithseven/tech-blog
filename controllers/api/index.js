const router = require('express').Router();
const userRoutes = require('./user-routes');
const singlepostRoutes = require('./blogpost-routes')
const commentRoutes = require('./comment-routes')


router.use('/users', userRoutes);
router.use('/blogpost', singlepostRoutes);
router.use('/comments', commentRoutes)


module.exports = router;