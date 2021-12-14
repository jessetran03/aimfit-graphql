import db from '../../db';

interface Args {
  exerciseId: number;
  setCount: number;
  repCount: number;
  weightCount: number;
}
export default async function addLogEntry(
  parent: any,
  args: Args,
  context: any,
) {
  try {
    const { exerciseId, setCount, repCount, weightCount } = args;
    const userId = context.user;
    const data = await db.query(`
      INSERT INTO exercise_log (exercise_id, user_id, set_count, rep_count, weight_count)
      VALUES ('${exerciseId}', '${userId}', '${setCount}', '${repCount}', '${weightCount}')
    `);
    const message = 'Log Entry has been recorded.';
    return message;
  } catch (error) {
    throw error;
  }
}
