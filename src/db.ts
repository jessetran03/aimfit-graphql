import { Pool } from 'pg';
import { DATABASE_URL, NODE_ENV } from './config';

const connectionString = DATABASE_URL;

const db = new Pool({
  connectionString,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default db;
