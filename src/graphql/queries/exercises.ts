import db from '../.././db';

const serializeExercise = (exercise: any) => ({
  id: exercise.id,
  name: exercise.exercise_name,
  muscle: exercise.muscle,
});

export default async function getExercises() {
  try {
    const exercisesData = await db.query('SELECT * FROM exercises');
    if (exercisesData.rows.length) {
      const exercises = exercisesData.rows.map(serializeExercise);
      return exercises;
    }
  } catch (error) {
    // throw new Error(error?.detail);
    console.log(error);
  }
}
