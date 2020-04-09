import { Entity } from "../contracts/Entity";

/**
 * Class Card.
 */
export class Card extends Entity {
  public static readonly TP_CREDIT: string = "C";
  public static readonly TP_DEBIT_SAVING: string = "A";
  public static readonly TP_DEBIT_CURRENT: string = "R";

  protected name: string = "";
  private number: string = "";
  private cvv: string = "";
  private expirationMonth: string;
  private expirationYear: string;
  protected installments: number;
  protected kind: string = Card.TP_CREDIT;

  /**
   * Card constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
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
   * @return string
   */
  getName() {
    return this.name;
  }

  /**
   * @return string
   */
  getNumber() {
    return this.number;
  }

  /**
   * @return string
   */
  getCvv() {
    return this.cvv;
  }

  /**
   * @return string
   */
  getExpirationMonth() {
    return this.expirationMonth;
  }

  /**
   * @return string
   */
  getExpirationYear() {
    return this.expirationYear;
  }

  /**
   * @return number
   */
  getInstallments() {
    return this.installments;
  }

  /**
   * @return string
   */
  getKind() {
    return this.kind;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      name: this.getName(),
      number: this.getNumber(),
      ccv: this.getCvv(),
      expirationMonth: this.getExpirationMonth(),
      expirationYear: this.getExpirationYear(),
      installments: this.getInstallments(),
      kind: this.getKind(),
    };
  }
}
