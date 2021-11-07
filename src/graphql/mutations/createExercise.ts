import db from '../.././db';

const serializeExercise = (exercise: any) => ({
  id: exercise.id,
  name: exercise.exercise_name,
  muscle: exercise.muscle,
});


export default async function createExercise(parent: any, args: any) {
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
    throw new Error(error?.detail);
  }
}
