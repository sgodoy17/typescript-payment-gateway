/**
 * @class
 */
export class GDSPayment {
  /**
   * @type {string}
   */
  protected approvalCode: string;

  /**
   * @type {string}
   */
  protected text: string;

  /**
   * @constructor
   * @param {string} approvalCode
   * @param {string} text
   */
  constructor(approvalCode: string = "", text: string = "") {
    this.approvalCode = approvalCode;
    this.text = text;
  }

  /**
   * @returns {string}
   */
  getApprovalCode(): string {
    return this.approvalCode;
  }

  /**
   * @returns {string}
   */
  getText(): string {
    return this.text;
  }

  /**
   *
   * @param {any} attributes
   * @returns {GDSPayment}
   */
  static createFromResponseData(attributes: any): GDSPayment {
    return new this(attributes.approvalCode, attributes.text);
  }
}
