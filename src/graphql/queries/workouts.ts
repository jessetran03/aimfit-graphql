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

const serializeExercise = (exercise: any) => ({
  id: exercise.exercise_id,
  muscle: exercise.muscle,
  name: exercise.exercise_name,
});

interface Args {
  id: string;
}

export default async function getWorkouts(parent: any, args: Args) {
  try {
    // const userId = user.user_id;
    let filter = '';
    if (args?.id) {
      const id = args.id;
      filter = `AND workouts.id = ${id}`;
    }
    const userId = 1;
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
      ${filter}
    `);
    const exerciseData = await db.query(`
      SELECT
        workout_exercises.id,
        workouts.id as workout_id,
        exercises.id as exercise_id,
        muscle,
        exercise_name
      FROM workout_exercises
      INNER JOIN workouts
      ON workout_exercises.workout_id = workouts.id
      INNER JOIN exercises
      ON workout_exercises.exercise_id = exercises.id;
    `);
    const workoutExercises = exerciseData.rows;
    const workouts = data.rows.map(serializeWorkout);
    const workoutsFull = workouts.map((workout) => {
      const exercises = workoutExercises
        .filter((workoutExercise) => workoutExercise.workout_id === workout.id)
        .map(serializeExercise);
      const workoutFull = { ...workout, exercises };
      return workoutFull;
    });
    return workoutsFull;
  } catch (error) {
    throw error;
  }
}
