const router = require('express').Router();

const apiRoutes = require('./api/api.js');

router.use('./api', apiRoutes);
 
module.exports = router;
