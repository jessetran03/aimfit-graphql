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

export default async function getWorkouts() {
  try {
    // console.log('starting');
    // const userId = user.user_id;
    const userId = 1;
    // console.log(userId);
    const data = await db.query(`
      SELECT
        workouts.id as id,
        users.id as user_id,
        day,
        title,
        user_name,
        first_name,
        last_name,
        password
      FROM workouts
      INNER JOIN users ON
        workouts.user_id = users.id
      WHERE user_id = ${userId}
    `);
    console.log(data.rows)
    const workouts = data.rows.map(serializeWorkout);
    return workouts;
  } catch (error) {
    throw error;
  }
}
