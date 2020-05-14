/**
 * @class
 */
export class Money {
  /**
   * @type {number}
   */
  public amount: number;

  /**
   * @type {string}
   */
  public currency: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.amount = data.amount;
    this.currency = data.currency;
  }

  /**
   * @returns {number}
   */
  getAmount(): number {
    return this.amount;
  }

  /**
   * @returns {string}
   */
  getCurrency(): string {
    return this.currency;
  }

  /**
   * @param {any} addend
   * @returns {Money}
   */
  add(addend: any): Money {
    let amount: any = this.amount;

    amount = Number(amount) + Number(addend.amount);

    return new Money({
      amount: amount.toString(),
      currency: this.currency,
    });
  }
}
