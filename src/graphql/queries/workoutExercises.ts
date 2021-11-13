import db from '../.././db';
import getExercise from './exercise';

const serializeWorkoutExercise = (workoutExercise: any) => ({
  id: workoutExercise.id,
  workout: {
    id: workoutExercise.workout_id,
    user: {
      id: workoutExercise.user_id,
      username: workoutExercise.user_name,
      firstName: workoutExercise.first_name,
      lastName: workoutExercise.last_name,
      dateCreated: workoutExercise.date_created,
      dateModified: workoutExercise.date_modified,
      password: workoutExercise.password,
    },
    day: workoutExercise.day,
    title: workoutExercise.title,
  },
  exercise: {
    id: workoutExercise.exercise_id,
    name: workoutExercise.exercise_name,
    muscle: workoutExercise.muscle,
  },
});

export default async function getWorkoutExercises() {
  try {
    const data = await db.query(`
      SELECT 
        workout_exercises.id,
        workouts.id as workout_id,
        exercises.id as exercise_id,
        users.id as user_id,
        day,
        title,
        user_name,
        first_name, 
        last_name,
        password,
        exercise_name,
        muscle
      FROM workout_exercises
      INNER JOIN workouts ON
        workout_exercises.workout_id = workouts.id
      INNER JOIN users ON
        workouts.user_id = users.id
      INNER JOIN exercises ON
        workout_exercises.exercise_id = exercises.id;
    `);
    const workoutExercises = data.rows.map(serializeWorkoutExercise);
    return workoutExercises;
  } catch (error) {
    throw error;
  }
}
