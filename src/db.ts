import { Pool } from 'pg';
import { DATABASE_URL } from './config';

const connectionString = DATABASE_URL;

const db = new Pool({
  connectionString,
});

export default db;
