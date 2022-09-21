import ValidationRegexEntity from './ValidationRegexEntity';

export default class EmailEntity extends ValidationRegexEntity {
  private static EMAIL_REGEX = /\S+@\S+\.\S/;
  constructor(value: string) {
    super(value, EmailEntity.EMAIL_REGEX, 'Email is invalid');
  }
}