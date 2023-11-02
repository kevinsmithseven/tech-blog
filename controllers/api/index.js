const router = require('express').Router();
const userRoutes = require('./user-routes');
const singlepostRoutes = require('./blogpost-routes')


router.use('/users', userRoutes);
router.use('/blogpost', singlepostRoutes);


module.exports = router;