import { AmountBase } from "./AmountBase";
import { AmountDetail } from "./AmountDetail";
import { TaxDetail } from "./TaxDetail";

/**
 * @class
 * @extends {AmountBase}
 */
export class Amount extends AmountBase {
  /**
   * @type {any}
   */
  protected taxes: any = null;

  /**
   * @type {any}
   */
  protected details: any = null;

  /**
   * @type {number}
   */
  protected taxAmount: number = 0;

  /**
   * @type {number}
   */
  protected vatDevolutionBase: number = 0;

  /**
   * @type {number}
   */
  protected subtotal: number = 0;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super(data);

    this.taxes = data.hasOwnProperty("taxes")
      ? this.setTaxes(data.taxes)
      : null;
    this.details = data.hasOwnProperty("details")
      ? this.setDetails(data.details)
      : null;
  }

  /**
   * @returns {any}
   */
  getTaxes(): any {
    return this.taxes;
  }

  /**
   * @returns {any}
   */
  getDetails(): any {
    return this.details;
  }

  /**
   * @returns {number}
   */
  getTaxAmount(): number {
    return this.taxAmount;
  }

  /**
   * @returns {number}
   */
  getDevolutionBase(): number {
    return this.vatDevolutionBase;
  }

  /**
   * @returns {number}
   */
  getSubtotal(): number {
    if (this.subtotal == 0) {
      return this.total - this.taxAmount;
    }

    return this.subtotal;
  }

  /**
   * @param {number} vatDevolutionBase
   */
  setVatDevolutionBase(vatDevolutionBase: number): void {
    this.vatDevolutionBase = vatDevolutionBase;
  }

  /**
   * @param {number} subtotal
   */
  setSubtotal(subtotal: number): void {
    this.subtotal = subtotal;
  }

  /**
   * @param {any} taxes
   * @returns {any}
   */
  setTaxes(taxes: any): any {
    let result: any = [];

    taxes.forEach((tax: any) => {
      if (tax instanceof Object) {
        tax = new TaxDetail(tax);
        this.taxAmount += tax.amount;
        result.push(tax);
      }
    });

    return result;
  }

  /**
   * @param {any} details
   * @returns {any}
   */
  setDetails(details: any): any {
    let result: any = [];

    details.forEach((detail: any) => {
      if (detail instanceof Object) {
        detail = new AmountDetail(detail);
        result.push(detail);
      }
    });

    return result;
  }

  /**
   * @returns {any}
   */
  private taxesToArray(): any {
    if (this.getTaxes()) {
      let taxes: any = [];

      this.getTaxes().forEach((tax: any) => {
        taxes.push(tax instanceof TaxDetail ? tax.toObject() : null);
      });

      return taxes;
    }

    return null;
  }

  /**
   * @returns {any}
   */
  private detailsToArray(): any {
    if (this.getDetails()) {
      let details: any = [];

      this.getDetails().forEach((detail: any) => {
        details.push(detail instanceof AmountDetail ? detail.toObject() : null);
      });

      return details;
    }

    return null;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter(
      Object.assign(super.toObject(), {
        taxes: this.taxesToArray(),
        details: this.detailsToArray(),
      })
    );
  }
}
