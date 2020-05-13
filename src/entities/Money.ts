import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Money extends Entity {
  /**
   * @type {any}
   */
  protected amount: any;

  /**
   * @type {string}
   */
  protected currency: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.amount = data.hasOwnProperty("amount")
      ? parseFloat(data.amount)
      : null;
    this.currency = data.hasOwnProperty("currency") ? data.currency : null;
  }

  /**
   * @returns {any}
   */
  getAmount(): any {
    return this.amount;
  }

  /**
   * @returns {string}
   */
  getCurrency(): string {
    return this.currency;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      amount: this.getAmount(),
      currency: this.getCurrency(),
    });
  }
}
