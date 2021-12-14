import db from '../../db';

interface Args {
  workoutId: number;
  exerciseId: number;
}
export default async function addWorkoutExercise(parent: any, args: Args) {
  try {
    const { workoutId, exerciseId } = args;
    const data = await db.query(`
      INSERT INTO workout_exercises (workout_id, exercise_id)
      VALUES ('${workoutId}', '${exerciseId}')
    `);
    const message = 'Exercise has been added to workout.';
    return message;
  } catch (error) {
    throw error;
  }
}
