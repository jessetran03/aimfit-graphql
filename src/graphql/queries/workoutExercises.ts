import db from '../.././db';
import getExercise from './exercise';

const serializeWorkoutExercise = (workoutExercise: any) => ({
  id: workoutExercise.id,
  workoutId: workoutExercise.workout_id,
  exercise: {
    id: workoutExercise.exercise_id,
    name: workoutExercise.exercise_name,
    muscle: workoutExercise.muscle,
  },
});

export default async function getWorkoutExercises() {
  try {
    const data = await db.query(`
      SELECT *
      FROM workout_exercises
      INNER JOIN exercises ON
      workout_exercises.exercise_id = exercises.id;
    `);
    const workoutExercises = data.rows.map(serializeWorkoutExercise);
    return workoutExercises;
  } catch (error) {
    throw error;
  }
}
