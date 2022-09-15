import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: process.env.DB_HOSTNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
})

export default connection;