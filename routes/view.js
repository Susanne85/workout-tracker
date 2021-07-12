const router = require('express').Router();
const path = require('path');

router.get('/', (request, response) => {
    //console.log('Route View -  home');
    response.sendFile(path.join(__dirname + '/../public/index.html'));
})

router.get('/exercise', (request, response) => {
    //console.log('Route View -  exercise');
    response.sendFile(path.join(__dirname + '/../public/exercise.html'));
})

router.get('/stats', (request, response) => {
    //console.log('Route View - stats');
    response.sendFile(path.join(__dirname + '/../public/stats.html'));
})
module.exports = router
