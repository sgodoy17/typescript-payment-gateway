import { Entity } from "../contracts/Entity";
import { Status } from "./Status";

/**
 * Class Token.
 */
export class Token extends Entity {
  protected status: any;
  protected token: string;
  protected subtoken: string;
  protected franchise: string;
  protected franchiseName: string;
  protected issuerName: string;
  protected lastDigits: string;
  protected validUntil: string;
  protected cvv: string;
  protected installments: number;

  /**
   * Token constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
    super();

    if (data.hasOwnProperty("status")) {
      this.status = new Status(data.status);
    }

    this.token = data.hasOwnProperty("token") ? data.token : null;
    this.subtoken = data.hasOwnProperty("subtoken") ? data.subtoken : null;
    this.franchise = data.hasOwnProperty("franchise") ? data.franchise : null;
    this.franchiseName = data.hasOwnProperty("franchiseName")
      ? data.franchiseName
      : null;
    this.issuerName = data.hasOwnProperty("issuerName")
      ? data.issuerName
      : null;
    this.lastDigits = data.hasOwnProperty("lastDigits")
      ? data.lastDigits
      : null;
    this.validUntil = data.hasOwnProperty("validUntil")
      ? data.validUntil
      : null;
    this.cvv = data.hasOwnProperty("cvv") ? data.cvv : null;
    this.installments = data.hasOwnProperty("installments")
      ? data.installments
      : null;
  }

  setStatus(status: Status): void {
    this.status = status;
  }

  /**
   * @return Status
   */
  getStatus(): Status {
    return this.status;
  }

  /**
   * @return string
   */
  getToken(): string {
    return this.token;
  }

  /**
   * @return string
   */
  getSubtoken(): string {
    return this.subtoken;
  }

  /**
   * @return string
   */
  getFranchise(): string {
    return this.franchise;
  }

  /**
   * @return string
   */
  getFranchiseName(): string {
    return this.franchiseName;
  }

  /**
   * @return string
   */
  getIssuerName(): string {
    return this.issuerName;
  }

  /**
   * @return string
   */
  getLastDigits(): string {
    return this.lastDigits;
  }

  /**
   * @return string
   */
  getValidUntil(): string {
    return this.validUntil;
  }

  /**
   * @return string
   */
  getCvv(): string {
    return this.cvv;
  }

  /**
   * @return number
   */
  getInstallments(): number {
    return this.installments;
  }

  /**
   * @return string
   */
  getExpiration(): string {
    let date = new Date(this.validUntil);
    let month = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(date);
    let year = new Intl.DateTimeFormat("en", { month: "numeric" }).format(date);

    return year.concat("/", month);
  }

  /**
   * @return boolean
   */
  isSuccessful(): boolean {
    return this.status.getStatus() == Status.ST_OK;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      status:
        typeof this.getStatus() !== "undefined"
          ? this.getStatus().toObject()
          : null,
      token: this.getToken(),
      subtoken: this.getSubtoken(),
      franchise: this.getFranchise(),
      franchiseName: this.getFranchiseName(),
      issuerName: this.getIssuerName(),
      lastDigits: this.getLastDigits(),
      validUntil: this.getValidUntil(),
      cvv: this.getCvv(),
      installments: this.getInstallments(),
    };
  }
}
