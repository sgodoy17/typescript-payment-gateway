import { Entity } from "../contracts/Entity";
import { Status } from "./Status";

/**
 * @class
 * @extends {Entity}
 */
export class Token extends Entity {
  /**
   * @type {any}
   */
  protected status: any;

  /**
   * @type {string}
   */
  protected token: string;

  /**
   * @type {string}
   */
  protected subtoken: string;

  /**
   * @type {string}
   */
  protected franchise: string;

  /**
   * @type {string}
   */
  protected franchiseName: string;

  /**
   * @type {string}
   */
  protected issuerName: string;

  /**
   * @type {string}
   */
  protected lastDigits: string;

  /**
   * @type {string}
   */
  protected validUntil: string;

  /**
   * @type {string}
   */
  protected cvv: string;

  /**
   * @type {number}
   */
  protected installments: number;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.status = data.hasOwnProperty("status")
      ? new Status(data.status)
      : null;
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

  /**
   * @param {any} status
   */
  setStatus(status: any): void {
    this.status = status;
  }

  /**
   * @returns {any}
   */
  getStatus(): any {
    return this.status;
  }

  /**
   * @returns {string}
   */
  getToken(): string {
    return this.token;
  }

  /**
   * @returns {string}
   */
  getSubtoken(): string {
    return this.subtoken;
  }

  /**
   * @returns {string}
   */
  getFranchise(): string {
    return this.franchise;
  }

  /**
   * @returns {string}
   */
  getFranchiseName(): string {
    return this.franchiseName;
  }

  /**
   * @returns {string}
   */
  getIssuerName(): string {
    return this.issuerName;
  }

  /**
   * @returns {string}
   */
  getLastDigits(): string {
    return this.lastDigits;
  }

  /**
   * @returns {string}
   */
  getValidUntil(): string {
    return this.validUntil;
  }

  /**
   * @returns {string}
   */
  getCvv(): string {
    return this.cvv;
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
  getExpiration(): string {
    let date = new Date(this.validUntil);
    let month = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(date);
    let year = new Intl.DateTimeFormat("en", { month: "numeric" }).format(date);

    return year.concat("/", month);
  }

  /**
   * @returns {boolean}
   */
  isSuccessful(): boolean {
    return this.status.getStatus() == Status.ST_OK;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      status: this.getStatus() ? this.getStatus().toObject() : null,
      token: this.getToken(),
      subtoken: this.getSubtoken(),
      franchise: this.getFranchise(),
      franchiseName: this.getFranchiseName(),
      issuerName: this.getIssuerName(),
      lastDigits: this.getLastDigits(),
      validUntil: this.getValidUntil(),
      cvv: this.getCvv(),
      installments: this.getInstallments(),
    });
  }
}
