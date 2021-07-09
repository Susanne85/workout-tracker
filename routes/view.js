const router = require('express').Router();
const Workout = require('../models/workout.js');
console.log ("in view");

router.get('/api/workouts', (request, response) => {
    console.log('Inside View get');
    Workout.find({}, (error, data) => {
        if (error) {
            response.status(500);
            response.send(error.message);
        } else {
            console.log(response.json);
        }
    })
})
//  Workout.find({})
//       .then(data => response.json(data))
//      .then(console.log)
//     .catch(error =>
    //    );
module.exports = router
