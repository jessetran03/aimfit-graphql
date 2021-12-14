import bcrypt from 'bcrypt';
import db from '../.././db';

interface Args {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export default async function createUser(parent: any, args: Args) {
  try {
    const { username, firstName, lastName, password } = args;
    const userData = await db.query(`
      SELECT 1
      FROM users
      WHERE users.user_name = '${username}';
    `);
    if (userData.rowCount > 0) {
      throw 'Username already exists';
    }

    const REGEX_UPPER_LOWER_NUMBER_SPECIAL =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

    if (password.length < 8) {
      throw 'Password must be longer than 8 characters';
    }
    if (password.length > 72) {
      throw 'Password must be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      throw 'Password must not start or end with empty spaces';
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      throw 'Password must contain one upper case, lower case, number and special character';
    }

    const hashedPassword = await bcrypt.hash(args.password, 12);
    const data = await db.query(`
      INSERT INTO users (user_name, first_name, last_name, password)
      VALUES ('${username}', '${firstName}', '${lastName}', '${hashedPassword}')
      RETURNING *;
    `);
    const newUser = serializeUser(data.rows[0]);
    return newUser;
  } catch (error) {
    console.error(error);
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
