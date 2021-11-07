import db from '../.././db';

const serializeExercise = (exercise: any) => ({
  id: exercise.id,
  name: exercise.exercise_name,
  muscle: exercise.muscle,
});

export default async function getExercises() {
  try {
    const data = await db.query('SELECT * FROM exercises');
    const exercises = data.rows.map(serializeExercise);
    return exercises;
  } catch (error) {
    throw error;
  }
}
