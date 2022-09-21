import EmailEntity from './EmailEntity';
import PasswordEntity from './PasswordEntity';

export default class UserEntity {
  private _username: string;
  private _email: EmailEntity;
  private _password: PasswordEntity;
  private _role: string;

  constructor(
    username: string,
    email: string,
    password: string,
    role: string,
  ) {
    this._username = username;
    this._email = new EmailEntity(email);
    this._password = new PasswordEntity(password);
    this._role = role;
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email.value;
  }

  get password(): string {
    return this._password.value;
  }

  get role(): string {
    return this._role;
  }
}