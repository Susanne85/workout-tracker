const router = require('express').Router();

const apiRoutes = require('./api/api.js');
const viewRoutes = require('./view');

//what is in the router.use to what you are prefix a route with
//what is in the require is where the module physically is
router.use('/',viewRoutes);
router.use('/api',apiRoutes);
 
module.exports = router;
