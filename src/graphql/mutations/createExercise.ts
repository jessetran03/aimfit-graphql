import db from '../.././db';

const serializeExercise = (exercise: any) => ({
  id: exercise.id,
  name: exercise.exercise_name,
  muscle: exercise.muscle,
});

interface Args {
  name: string;
  muscle: string;
}

export default async function createExercise(parent: any, args: Args) {
  try {
    const { name, muscle } = args;
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
