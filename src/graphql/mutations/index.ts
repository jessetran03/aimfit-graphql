import addLogEntry from './addLogEntry';
import addWorkoutExercise from './addWorkoutExercise';
import createExercise from './createExercise';
import createUser from './createUser';
import createWorkout from './createWorkout';
import deleteWorkout from './deleteWorkout';
import updateWorkout from './updateWorkout';

const Mutation = {
  newWorkoutExercise: addWorkoutExercise,
  deleteWorkout: deleteWorkout,
  newExercise: createExercise,
  newLogEntry: addLogEntry,
  newUser: createUser,
  newWorkout: createWorkout,
  updateWorkout: updateWorkout,
};

export default Mutation;
