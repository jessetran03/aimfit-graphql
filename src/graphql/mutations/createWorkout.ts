import db from '../.././db';

interface Args {
  day: string;
  title: string;
}

export default async function createWorkout(
  parent: any,
  args: Args,
  context: any,
) {
  try {
    const { day, title } = args;
    const userId = context.user;
    const data = await db.query(`
      INSERT INTO workouts (user_id, day, title)
      VALUES (${userId}, '${day}', '${title}')
      RETURNING *
    `);
    const workoutTitle = data.rows[0].title;
    const message = `${workoutTitle} has been created.`;
    return message;
  } catch (error) {
    throw error;
  }
}
