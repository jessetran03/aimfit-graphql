import getExercise from './exercise';
import getExerciseLog from './exerciseLog';
import getExercises from './exercises';
import getUsers from './users';
import getWorkout from './workout';
import getWorkoutExercises from './workoutExercises';
import getWorkouts from './workouts';

const Query = {
  exercise: getExercise,
  exercises: getExercises,
  exerciseLog: getExerciseLog,
  users: getUsers,
  workout: getWorkout,
  workoutExercises: getWorkoutExercises,
  workouts: getWorkouts,
};

export default Query;
