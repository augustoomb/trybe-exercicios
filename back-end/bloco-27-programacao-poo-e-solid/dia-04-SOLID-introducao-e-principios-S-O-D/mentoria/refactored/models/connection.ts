import mysql from 'mysql2/promise';
import 'dotenv/config';

/**
 * Usa o Padrão de Design Singleton
 * @classdesc Garante que apenas uma Pool de conexão com o banco de dados exista
 * leia mais sobre https://refactoring.guru/design-patterns/singleton
 */
export default class MySQLConnector {
  private static _connection: mysql.Pool | null = null;

  public static conn(config: mysql.PoolOptions): mysql.Pool {
    if (MySQLConnector._connection === null) {
      MySQLConnector._connection = mysql.createPool(config);
    }
    return MySQLConnector._connection;
  }
}
