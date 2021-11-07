import db from '../.././db';

const serializeUser = (user: any) => ({
  id: user.id,
  username: user.user_name,
  firstName: user.first_name,
  lastName: user.last_name,
  password: user.password,
  dateCreated: user.date_created,
});

export default async function getUsers() {
  try {
    const data = await db.query('SELECT * FROM users');
    if (data.rows.length) {
      const users = data.rows.map(serializeUser);
      return users;
    }
  } catch (error) {
    throw error;
  }
}
