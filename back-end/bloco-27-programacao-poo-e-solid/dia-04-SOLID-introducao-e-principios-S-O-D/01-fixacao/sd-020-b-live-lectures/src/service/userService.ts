import UserEntity from '../entities/UserEntity';
import { IUser } from '../models/IUser';
import UserModel from '../models/UserModel';

const create = async (user: IUser) => {
  const { username, email, password, role } = user;
  const userEntity = new UserEntity(username, email, password, role);
  await UserModel.create({
    username: userEntity.username,
    email: userEntity.email,
    password: userEntity.password,
    role: userEntity.role,
  });
};

export default create;