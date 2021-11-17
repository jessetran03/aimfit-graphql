import db from '../.././db';

const serializeLogEntry = (logEntry: any) => ({
  id: logEntry.id,
  exercise: {
    id: logEntry.exercise_id,
    name: logEntry.exercise_name,
    muscle: logEntry.muscle,
  },
  user: {
    id: logEntry.user_id,
    username: logEntry.user_name,
    firstName: logEntry.first_name,
    lastName: logEntry.last_name,
    password: logEntry.password,
  },
  setCount: logEntry.set_count,
  repCount: logEntry.rep_count,
  weightCount: logEntry.weight_count,
  dateLogged: logEntry.date_logged
});

interface Args {
  exerciseId: string;
}

export default async function getExerciseLog(parent: any, args: Args) {
  let filter = '';
  if (args?.exerciseId) {
    const exerciseId = args.exerciseId;
    filter = `AND exercise_log.exercise_id = ${exerciseId}`;
  }
  try {
    const userId = 1;
    const data = await db.query(`
      SELECT
        exercise_log.id as id,
        exercises.id as exercise_id,
        users.id as user_id,
        set_count,
        rep_count,
        weight_count,
        date_logged,
        exercise_name,
        muscle,
        user_name,
        first_name,
        last_name,
        password
      FROM exercise_log
      INNER JOIN exercises ON
        exercise_log.exercise_id = exercises.id
      INNER JOIN users ON
        exercise_log.user_id = users.id
      WHERE exercise_log.user_id = ${userId}
      ${filter}
    `);
    console.log({ data: data.rows })
    const exerciseLog = data.rows.map(serializeLogEntry);
    return exerciseLog;
  } catch (error) {
    throw error;
  }
}