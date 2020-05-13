import { Entity } from "../contracts/Entity";
import { Money } from "./Money";
import { TaxesCollection } from "./TaxesCollection";

/**
 * @class
 * @extends {Entity}
 */
export class Fare extends Entity {
  /**
   * @type {any}
   */
  protected baseFare: any;

  /**
   * @type {any}
   */
  protected totalTax: any;

  /**
   * @type {any}
   */
  protected totalFare: any;

  /**
   * @type {any}
   */
  protected taxesCollection: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.baseFare = data.hasOwnProperty("base_fare")
      ? new Money(data.base_fare)
      : null;
    this.totalTax = data.hasOwnProperty("total_tax")
      ? new Money(data.total_tax)
      : null;
    this.totalFare = data.hasOwnProperty("total_fare")
      ? new Money(data.total_fare)
      : null;
    this.taxesCollection = data.hasOwnProperty("taxes_collection")
      ? new TaxesCollection(data.taxes_collection)
      : null;
  }

  /**
   * @returns {any}
   */
  getBaseFare(): any {
    return this.baseFare;
  }

  /**
   * @returns {any}
   */
  getTotalTax(): any {
    return this.totalTax;
  }

  /**
   * @returns {any}
   */
  getTotalFare(): any {
    return this.totalFare;
  }

  /**
   * @returns {any}
   */
  getTaxesCollection(): any {
    return this.taxesCollection;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      baseFare: this.getBaseFare().toObject(),
      totalTax: this.getTotalTax().toObject(),
      totalFare: this.getTotalFare().toObject(),
      taxesCollection: this.getTaxesCollection().toObject(),
    });
  }
}
