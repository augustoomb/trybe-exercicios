import ValidationRegexEntity from './ValidationRegexEntity';

export default class PasswordEntity extends ValidationRegexEntity {
  private static PASSWORD_REGEX = /^\d+$/;
  constructor(value: string) {
    super(value, PasswordEntity.PASSWORD_REGEX, 'Password is invalid');
  }
}