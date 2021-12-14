import db from '../.././db';

interface Args {
  id: number;
  day: string;
  title: string;
}

export default async function createWorkout(
  parent: any,
  args: Args,
  context: any,
) {
  try {
    const { id, day, title } = args;
    const userId = context.user;
    const data = await db.query(`
      UPDATE workouts
      SET day = '${day}', title = '${title}'
      WHERE id = ${id} AND user_id = ${userId}
      RETURNING *
    `);
    const workoutTitle = data.rows[0].title;
    const message = `${workoutTitle} has been updated.`;
    return message;
  } catch (error) {
    throw error;
  }
}
