import createExercise from './createExercise';
import createUser from './createUser';
import createWorkout from './createWorkout';
import deleteWorkout from './deleteWorkout';

const Mutation = {
  deleteWorkout: deleteWorkout,
  newExercise: createExercise,
  newUser: createUser,
  newWorkout: createWorkout,
};

export default Mutation;
