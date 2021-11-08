import db from '../.././db';

const serializeWorkout = (workout: any) => ({
  id: workout.id,
  userId: workout.user_id,
  title: workout.title,
  day: workout.day,
})

interface Args {
  input: Input;
}

interface Input {
  day: string;
  title: string;
}
export default async function createWorkout(parent: any, args: Args, { user }: any) {
  try {
    const { day, title } = args.input;
    // const userId = user.user_id;
    const userId = 1;
    const data = await db.query(`
      INSERT INTO workouts (user_id, day, title)
      VALUES (${userId}, '${day}', '${title}')
      RETURNING *
    `);
    const newWorkout = serializeWorkout(data.rows[0]);
    return newWorkout;
  } catch (error) {
    throw error;
  }
}
