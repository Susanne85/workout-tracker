const router = require('express').Router();
const Workout = require('../../models/workout');

console.log("in here");
router.get("/api/workouts", (request, response) => {
    console.log('Inside API get data');
    Workout.find({})
        .then(data => response.json(data))
        .then(console.log)
        .catch(error =>
            response.status(500)
        );
})

module.exports = router
