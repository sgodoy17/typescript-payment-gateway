import { Money } from "./Money";
import { TaxesCollection } from "./TaxesCollection";

/**
 * @class
 */
export class Fare {
  /**
   * @type {Money}
   */
  public baseFare: Money;

  /**
   * @type {Money}
   */
  public totalTax: Money;

  /**
   * @type {Money}
   */
  public totalFare: Money;

  /**
   * @type {TaxesCollection}
   */
  public taxesCollection: TaxesCollection;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.baseFare = data.baseFare;
    this.totalTax = data.totalTax;
    this.totalFare = data.totalFare;
    this.taxesCollection = data.taxesCollection;
  }

  /**
   * @param {any} data
   * @returns {Fare}
   */
  static fromResponse(data: any): Fare {
    return new this({
      baseFare: new Money(data.base_fare),
      totalTax: new Money(data.total_tax),
      totalFare: new Money(data.total_fare),
      taxesCollection: TaxesCollection.fromResponse(data.taxes_collection),
    });
  }
}
