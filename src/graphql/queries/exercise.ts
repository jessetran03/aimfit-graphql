import db from "../.././db";

const serializeExercise = (exercise: any) => ({
  id: exercise.id,
  name: exercise.exercise_name,
  muscle: exercise.muscle,
});

export default async function getExercise(args: any) {
  try {
    const { id } = args;
    const exerciseData = await db.query(`
      SELECT * FROM exercises
      WHERE id = ${id}
    `);
    const exercise = serializeExercise(exerciseData.rows[0]);
    return exercise;
  } catch (error) {
    // throw new Error(error?.detail);
    console.log(error);

  }
}
