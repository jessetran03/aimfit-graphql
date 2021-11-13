import addWorkoutExercise from './addWorkoutExercise';
import createExercise from './createExercise';
import createUser from './createUser';
import createWorkout from './createWorkout';
import deleteWorkout from './deleteWorkout';

const Mutation = {
  newWorkoutExercise: addWorkoutExercise,
  deleteWorkout: deleteWorkout,
  newExercise: createExercise,
  newUser: createUser,
  newWorkout: createWorkout,
};

export default Mutation;
