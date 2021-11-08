import db from '../.././db';

export default async function createExercise(parent: any, args: Args) {
  try {
    const { name, muscle } = args.input;
    const data = await db.query(`
      INSERT INTO exercises (exercise_name, muscle)
      VALUES ('${name}', '${muscle}')
      RETURNING *
    `);
    const newExercise = serializeExercise(data.rows[0]);
    return newExercise;
  } catch (error) {
    throw error;
  }
}

const serializeExercise = (exercise: any) => ({
  id: exercise.id,
  name: exercise.exercise_name,
  muscle: exercise.muscle,
});

interface Args {
  input: Input
}

interface Input {
  name: string
  muscle: string
}