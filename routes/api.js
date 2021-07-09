const router = require('express').Router();
const Workout = require('../models/workout.js');

router.get("/api/workouts", (request, response) => {
    console.log('Inside API get data');
    try {
        const getWorkoutData = Workout.find({}, (error, data) => {
            if (error) {
                response.status(500);
                response.send(error.message);
            } else {
                response.json(data);
            }
        })
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
})

module.exports = router
