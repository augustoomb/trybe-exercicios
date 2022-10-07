// ./models/connection.ts

import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root@123',
  database: 'books_api',
  multipleStatements: true,
  // host: process.env.DB_HOSTNAME,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE
});
