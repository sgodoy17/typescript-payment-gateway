import { Entity } from "../contracts/Entity";
import { AmountBase } from "./AmountBase";

/**
 * @class
 * @extends {Entity}
 */
export class AmountConversion extends Entity {
  /**
   * @type {any}
   */
  protected from: any;

  /**
   * @type {any}
   */
  protected to: any;

  /**
   * @type {number}
   */
  protected factor: number;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.from = data.hasOwnProperty("from") ? new AmountBase(data.from) : null;
    this.to = data.hasOwnProperty("to") ? new AmountBase(data.to) : null;
    this.factor = data.hasOwnProperty("factor") ? data.factor : null;
  }

  /**
   * @returns {any}
   */
  getFrom(): any {
    return this.from;
  }

  /**
   * @returns {any}
   */
  getTo(): any {
    return this.to;
  }

  /**
   * @returns {number}
   */
  getFactor(): number {
    return this.factor;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      from: this.getFrom(),
      to: this.getTo(),
      factor: this.getFactor(),
    });
  }
}
