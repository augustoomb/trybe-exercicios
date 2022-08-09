const mysql = require('mysql2/promise'); // importamos o mysql do módulo mysql2/promise - npm install mysql2

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'model_example'
});

module.exports = connection;