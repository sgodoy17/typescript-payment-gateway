import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Credit extends Entity {
  /**
   * @type {string}
   */
  protected code: string;

  /**
   * @type {string}
   */
  protected type: string;

  /**
   * @type {string}
   */
  protected groupCode: string;

  /**
   * @type {number}
   */
  protected installment: number;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.code = data.hasOwnProperty("code") ? data.code : null;
    this.type = data.hasOwnProperty("type") ? data.type : null;
    this.groupCode = data.hasOwnProperty("groupCode") ? data.groupCode : null;
    this.installment = data.hasOwnProperty("installment")
      ? data.installment
      : null;
  }

  /**
   * @returns {string}
   */
  getCode(): string {
    return this.code;
  }

  /**
   * @returns {string}
   */
  getType(): string {
    return this.type;
  }

  /**
   * @returns {string}
   */
  getGroupCode(): string {
    return this.groupCode;
  }

  /**
   * @returns {string}
   */
  getInstallment(): number {
    return this.installment;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      code: this.getCode(),
      type: this.getType(),
      groupCode: this.getGroupCode(),
      installment: this.getInstallment(),
    });
  }
}
