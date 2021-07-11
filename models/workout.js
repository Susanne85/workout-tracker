const mongoose = require("mongoose");

const Schema = mongoose.Schema;;

var workoutSchema = new Schema({
  day: { type: Date,required: true },
  exercises: [{
  type: { type: String, required: true },
  name: { type: String, required: true },
  duration: { type: String, required: true },
  weight: { type: Number, required: false },
  reps: { type: Number, required: false },
  sets: { type: String, required: false },
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
