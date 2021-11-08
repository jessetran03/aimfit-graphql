import db from '../.././db';

export default async function createUser(parent: any, args: Args) {
  try {
    const { username, firstName, lastName } = args.input;
    // const password = await bcrypt.hash(args.input.password, 12);
    const password = 'Testing';
    const data = await db.query(`
      INSERT INTO users (user_name, first_name, last_name, password)
      VALUES ('${username}', '${firstName}', '${lastName}', '${password}')
      RETURNING *
    `);
    const newUser = serializeUser(data.rows[0]);
    return newUser;
  } catch (error) {
    throw error;
  }
}

const serializeUser = (user: any) => ({
  id: user.id,
  username: user.user_name,
  firstName: user.first_name,
  lastName: user.last_name,
  password: user.password,
  dateCreated: user.date_created,
});

interface Args {
  input: Input;
}

interface Input {
  username: string;
  firstName: string;
  lastName: string;
}
