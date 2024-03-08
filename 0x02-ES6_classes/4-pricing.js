import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter
  get amount() {
    return this._amount;
  }

  set amount(number) {
    this._amount = number;
    if (typeof number !== 'number') {
      throw new TypeError('Amount must be a number');
    }
  }

  // getter
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a valid currency');
    }
  }

  // method
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}