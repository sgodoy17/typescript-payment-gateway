import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class AmountBase extends Entity {
  /**
   * @type {string}
   */
  currency: string = "COP";

  /**
   * @type {number}
   */
  total: number;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.currency = data.hasOwnProperty("currency") ? data.currency : null;
    this.total = data.hasOwnProperty("total") ? data.total : null;
  }

  /**
   * @returns {string}
   */
  getCurrency(): string {
    return this.currency;
  }

  /**
   * @returns {number}
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      currency: this.getCurrency(),
      total: this.getTotal(),
    });
  }
}
