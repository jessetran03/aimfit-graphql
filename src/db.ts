import { Pool } from 'pg';
import { DATABASE_URL, NODE_ENV } from './config';

const connectionString = DATABASE_URL;

const db = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: NODE_ENV === 'production' ? false : true,
  },
});

export default db;
