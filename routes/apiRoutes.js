const router = require("express").Router();
//require in your model

//make your routes here
router.get("/api/workouts", (req, res) => {

    db.Workout.find({})
        .then((workout) => {
            res.json(workout);
        })
        .catch((err) => res.json(err));
});

router.get("/api/workouts/:id", ({ params, body }(req, res) =>

    db.Workout.findByIdAndUpdate(
        //giving the _id for mongo from the params passed in through the URL
        { _id: params.id },


.then((updatedWorkout) => {
            { $push: { exercises: body } }
    )
        res.json(updatedWorkout);
      })
      .catch ((err) => res.json(err));
});


router.post("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then((workout) => {
            res.json(workout);
        })
        .catch((err) => res.json(err));
});

router.put("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

//export routes for the server.js!
