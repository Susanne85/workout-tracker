const router = require('express').Router();
const Workout = require('../../models/workout');

router.get("/workouts", (request, response) => {
    console.log('Route /routes/api - get all workouts');
    const getWorkoutData = Workout.find({}, (error, data) => {
        if (error) {
            response.status(500);
            response.send(error.message);
        } else {
            response.json(data);
        }
    })
})

router.put("/workouts/:id", (request, response) => {
    console.log("Route api/workouts/:id - add new exercise");
})
router.post("/workouts", (request, response) => {
    console.log("Route api/workouts - add new workout");
})

router.get("/workouts/range", (request, response) => {
    console.log("Route api/workouts - workouts in range");
})

module.exports = router
