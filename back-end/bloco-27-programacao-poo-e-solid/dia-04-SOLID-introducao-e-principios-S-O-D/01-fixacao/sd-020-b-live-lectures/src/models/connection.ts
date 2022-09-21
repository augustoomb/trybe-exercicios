import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'mysqldb',
  user: 'root' /* Se necessário, altere o user */,
  password: 'example' /* Não se esqueça de inserir a senha aqui! */,
  database: 'solid_example',
});

export default connection;