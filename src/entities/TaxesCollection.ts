import { Entity } from "../contracts/Entity";
import { Money } from "./Money";

/**
 * @class
 * @extends {Entity}
 */
export class TaxesCollection extends Entity {
  /**
   * @type {any}
   */
  protected iva: any;

  /**
   * @type {any}
   */
  protected otherTaxes: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.iva = data.hasOwnProperty("iva") ? new Money(data.iva) : null;
    this.otherTaxes = data.hasOwnProperty("other_taxes")
      ? new Money(data.other_taxes)
      : null;
  }

  /**
   * @returns {any}
   */
  getIva(): any {
    return this.iva;
  }

  /**
   * @returns {any}
   */
  getOtherTaxes(): any {
    return this.otherTaxes;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      iva: this.getIva().toObject(),
      otherTaxes: this.getOtherTaxes().toObject(),
    });
  }
}
