import db from '../../db';

interface Args {
  input: Input
}
interface Input {
  workoutId: number
  exerciseId: number
}
export default async function addWorkoutExercise(parent: any, args: Args) {
  try {
    const { workoutId, exerciseId } = args.input;
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



