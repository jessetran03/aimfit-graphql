import getExercise from './exercise';
import getExercises from './exercises';
import getUsers from './users';
import getWorkoutExercises from './workoutExercises';
import getWorkouts from './workouts';

const Query = {
  exercise: getExercise,
  exercises: getExercises,
  users: getUsers,
  workoutExercises: getWorkoutExercises,
  workouts: getWorkouts,
};

export default Query;
