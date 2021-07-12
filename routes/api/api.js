const router = require('express').Router();
const mongojs = require('mongojs');
const Workout = require('../../models/workout');

router.get("/workouts", (request, response) => {
    console.log('Route /routes/api - get all workouts');
    const getWorkoutData = Workout.find({}, (error, data) => {
        if (error) {
            response.status(500);
            response.send(error.message);
        } else {
            Workout.aggregate([
                { $addFields: { "totalDuration": { $sum: "$exercises.duration" } } },
                { $addFields: { "totalWeight": { $sum: "$exercises.weight" } } },
            ])
                .then((dbWorkout) => {
                    console.log('here', dbWorkout);
                    response.json(dbWorkout);
                })
                .catch((error) => {
                    response.json(error);
                });
        }
    })
})

router.put("/workouts/:id", (request, response) => {
    console.log("Route api/workouts/:id - update exercise", request.params.id);
    console.log("Route api/workouts/:id - update exercise", request.body);

    Workout.findByIdAndUpdate(
        request.params.id,
        { $push: { "exercises": request.body } },
        { new: true, runValidators: true }
    )
        .then((dbWorkout) => {
            response.json(dbWorkout);
        })
        .catch((error) => {
            response.json(error);
        });
});
router.post("/workouts", (request, response) => {
    console.log("Route api/workouts - add new exercise ", request.body);
    const addOneDtls = Workout.create(request.body, (error, workoutData) => {
        if (error) {
            response.status(500);
            response.send(error.message);
        } else {
            response.json(workoutData);
        }
    });
});

router.get("/workouts/range", (request, response) => {
    console.log("Route api/workouts - workouts in range");
})

module.exports = router
