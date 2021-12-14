import db from '../.././db';

const serializeWorkout = (workout: any) => ({
  id: workout.id,
  user: {
    id: workout.user_id,
    username: workout.user_name,
    firstName: workout.first_name,
    lastName: workout.last_name,
    dateCreated: workout.date_created,
    dateModified: workout.date_modified,
    password: workout.password,
  },
  title: workout.title,
  day: workout.day,
});

interface Args {
  id: string;
}

export default async function getWorkout(
  parent: any,
  args: Args,
  context: any,
) {
  try {
    const { id } = args;
    const userId = context.user;
    const data = await db.query(`
      SELECT * FROM workouts
      INNER JOIN users ON
        workouts.user_id = ${userId}
      WHERE workouts.id = ${id}
    `);
    if (data.rows.length) {
      const workout = serializeWorkout(data.rows[0]);
      return workout;
    }
  } catch (error) {
    throw error;
  }
}
