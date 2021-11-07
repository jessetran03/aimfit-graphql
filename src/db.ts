import { Pool } from 'pg';
import { POSTGRES_URI } from './config';

const connectionString = POSTGRES_URI;

const db = new Pool({
  connectionString,
});

export default db;
