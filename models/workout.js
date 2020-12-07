const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name",

                },
                duration: {
                    type: Number, required: "Input duration of the exercise"
                },
                weight: { type: Number },
                distance: { type: Number },
                reps: { type: Number },
                sets: { type: Number },

            }
        ]
    }
);

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;