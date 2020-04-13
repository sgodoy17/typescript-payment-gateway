import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Card extends Entity {
  public static readonly TP_CREDIT: string = "C";
  public static readonly TP_DEBIT_SAVING: string = "A";
  public static readonly TP_DEBIT_CURRENT: string = "R";

  /**
   * @type {string}
   */
  protected name: string;

  /**
   * @type {string}
   */
  private number: string;

  /**
   * @type {string}
   */
  private cvv: string;

  /**
   * @type {string}
   */
  private expirationMonth: string;

  /**
   * @type {string}
   */
  private expirationYear: string;

  /**
   * @type {number}
   */
  protected installments: number;

  /**
   * @type {string}
   */
  protected kind: string = Card.TP_CREDIT;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.name = data.hasOwnProperty("name") ? data.name : null;
    this.number = data.hasOwnProperty("number") ? data.number : null;
    this.cvv = data.hasOwnProperty("cvv") ? data.cvv : null;
    this.expirationMonth = data.hasOwnProperty("expirationMonth")
      ? data.expirationMonth
      : null;
    this.expirationYear = data.hasOwnProperty("expirationYear")
      ? data.expirationYear
      : null;
    this.installments = data.hasOwnProperty("installments")
      ? data.installments
      : null;

    if (data.hasOwnProperty("kind")) {
      this.kind = data.kind;
    }
  }

  /**
   * @returns {string}
   */
  getName(): string {
    return this.name;
  }

  /**
   * @returns {string}
   */
  getNumber(): string {
    return this.number;
  }

  /**
   * @returns {string}
   */
  getCvv(): string {
    return this.cvv;
  }

  /**
   * @returns {string}
   */
  getExpirationMonth(): string {
    return this.expirationMonth;
  }

  /**
   * @returns {string}
   */
  getExpirationYear(): string {
    return this.expirationYear;
  }

  /**
   * @returns {number}
   */
  getInstallments(): number {
    return this.installments;
  }

  /**
   * @returns {string}
   */
  getKind(): string {
    return this.kind;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      name: this.getName(),
      number: this.getNumber(),
      cvv: this.getCvv(),
      expirationMonth: this.getExpirationMonth(),
      expirationYear: this.getExpirationYear(),
      installments: this.getInstallments(),
      kind: this.getKind(),
    });
  }
}
