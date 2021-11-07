import db from '../.././db';

const serializeExercise = (exercise: any) => ({
  id: exercise.id,
  name: exercise.exercise_name,
  muscle: exercise.muscle,
});

interface Args {
  id: string;
}

export default async function getExercise(parent: any, args: Args) {
  try {
    const { id } = args;
    const data = await db.query(`
      SELECT * FROM exercises
      WHERE id = ${id}
    `);
    if (data.rows.length) {
      const exercise = serializeExercise(data.rows[0]);
      return exercise;
    }
  } catch (error) {
    throw error;
  }
}
