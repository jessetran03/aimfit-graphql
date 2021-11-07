import getExercise from "./workouts";
import getExercises from "./exercises";
import getUsers from "./users";
import getWorkouts from "./workouts";

const Query = {
  exercise: getExercise,
  exercises: getExercises,
  users: getUsers,
  workouts: getWorkouts,
};

export default Query;