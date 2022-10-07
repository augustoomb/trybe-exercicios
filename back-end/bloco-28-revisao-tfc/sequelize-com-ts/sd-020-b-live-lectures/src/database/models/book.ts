import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';

class Book extends Model {
  id!: number;
  title!: string;
  price!: number;
  author!: string;
}

Book.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING(30),
      allowNull: false,
    },
    price: {
      type: DECIMAL(10, 2),
      allowNull: false,
    },
    author: {
      type: STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'books',
    timestamps: false,
  },
);

export default Book;
