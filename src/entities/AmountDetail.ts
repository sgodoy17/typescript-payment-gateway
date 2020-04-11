import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class AmountDetail extends Entity {
  /**
   * @type {string}
   */
  protected kind: string;

  /**
   * @type {number}
   */
  protected amount: number;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.kind = data.hasOwnProperty("kind") ? data.kind : null;
    this.amount = data.hasOwnProperty("amount") ? data.amount : null;
  }

  /**
   * @returns {string}
   */
  getKind(): string {
    return this.kind;
  }

  /**
   * @returns {number}
   */
  getAmount(): number {
    return this.amount;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      kind: this.getKind(),
      amount: this.getAmount(),
    });
  }
}
