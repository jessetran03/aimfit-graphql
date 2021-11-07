import db from "../.././db";

const serializeWorkout = (workout: any)  => ({
  id: workout.id,
  userId: workout.user_id,
  title: workout.title,
  day: workout.day,
})

export default async function getWorkouts() {
  try {
    console.log('starting')
    // const userId = user.user_id;
    const userId = 1;
    console.log(userId)
    const workoutsData = await db.query(`
      SELECT * FROM workouts
      WHERE user_id = ${userId}
    `);
    console.log(workoutsData)
    if (workoutsData.rows.length) {
      const workouts = workoutsData.rows.map(serializeWorkout);
      return workouts;
    }
  } catch (error) {
    // throw new Error(error.detail);
    console.log(error)
  }
}