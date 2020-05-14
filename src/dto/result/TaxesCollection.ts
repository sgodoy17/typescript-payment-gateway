import { Money } from "./Money";

/**
 * @class
 */
export class TaxesCollection {
  /**
   * @type {Money}
   */
  public iva: Money;

  /**
   * @type {Money}
   */
  public otherTaxes: Money;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.iva = data.iva;
    this.otherTaxes = data.otherTaxes;
  }

  /**
   * @param {any} data
   * @returns {TaxesCollection}
   */
  static fromResponse(data: any): TaxesCollection {
    return new this({
      iva: new Money(data.iva),
      otherTaxes: new Money(data.other_taxes),
    });
  }
}
