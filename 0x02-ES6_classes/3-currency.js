export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter
  get code() {
    return this._code;
  }

  // setter
  set code(str) {
    this._code = str;
    if (typeof str !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(str) {
    this._name = str;
    if (typeof str !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
