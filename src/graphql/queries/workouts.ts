import db from '../.././db';

const serializeWorkout = (workout: any) => ({
  id: workout.id,
  userId: workout.user_id,
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
      SELECT * FROM workouts
      WHERE user_id = ${userId}
    `);
    const workouts = data.rows.map(serializeWorkout);
    return workouts;
  } catch (error) {
    throw error;
  }
}
