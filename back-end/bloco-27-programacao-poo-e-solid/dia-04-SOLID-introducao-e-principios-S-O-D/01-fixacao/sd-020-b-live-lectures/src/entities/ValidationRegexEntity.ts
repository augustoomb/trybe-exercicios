export default abstract class ValidationRegexEntity {
  constructor(
    private _value: string,
    private _regex: RegExp,
    private _errorMessage = 'Field invalid',
  ) {
    this._isValid();
  }

  private _isValid(): void {
    if (!this._regex.test(this._value)) {
      throw new Error(this._errorMessage);
    }
  }

  get value(): string {
    return this._value;
  }
}