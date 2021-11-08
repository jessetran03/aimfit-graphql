import db from '../.././db';

interface Args {
  id: number;
}

export default async function deleteWorkout(parent: any, args: Args) {
  try {
    const { id } = args;
    const data = await db.query(`
      DELETE FROM workouts
      WHERE id = ${id}
    `);
    console.log(data);
    return "Workout successfully deleted";
  } catch (error) {
    throw error;
  }
}
