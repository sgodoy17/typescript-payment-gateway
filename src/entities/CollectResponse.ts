import { Amount } from "./Amount";
import { AmountConversion } from "./AmountConversion";
import { Entity } from "../contracts/Entity";
import { Status } from "./Status";

/**
 * @class
 */
export class CollectResponse extends Entity {
  /**
   * @type {any}
   */
  protected status: any;

  /**
   * @type {any}
   */
  protected date: any;

  /**
   * @type {any}
   */
  protected transactionDate: any;

  /**
   * @type {number}
   */
  protected internalReference: number;

  /**
   * @type {string}
   */
  protected reference: string;

  /**
   * @type {string}
   */
  protected paymentMethod: string;

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
   * @type {any}
   */
  protected amount: any;

  /**
   * @type {any}
   */
  protected conversion: any;

  /**
   * @type {string}
   */
  protected authorization: string;

  /**
   * @type {number}
   */
  protected receipt: number;

  /**
   * @type {string}
   */
  protected type: string;

  /**
   * @type {boolean}
   */
  protected refunded: boolean;

  /**
   * @type {string}
   */
  protected lastDigits: string;

  /**
   * @type {string}
   */
  protected provider: string;

  /**
   * @type {number}
   */
  protected discount: number;

  /**
   * @type {any}
   */
  protected processorFields: any;

  /**
   * @type {any}
   */
  protected additional: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.status = data.hasOwnProperty("status")
      ? new Status(data.status)
      : null;
    this.date = data.hasOwnProperty("date") ? data.date : null;
    this.transactionDate = data.hasOwnProperty("transactionDate")
      ? data.transactionDate
      : null;
    this.internalReference = data.hasOwnProperty("internalReference")
      ? data.internalReference
      : null;
    this.reference = data.hasOwnProperty("reference") ? data.reference : null;
    this.paymentMethod = data.hasOwnProperty("paymentMethod")
      ? data.paymentMethod
      : null;
    this.franchise = data.hasOwnProperty("franchise") ? data.franchise : null;
    this.franchiseName = data.hasOwnProperty("franchiseName")
      ? data.franchiseName
      : null;
    this.issuerName = data.hasOwnProperty("issuerName")
      ? data.issuerName
      : null;
    this.amount = data.hasOwnProperty("amount")
      ? new Amount(data.amount)
      : null;
    this.conversion = data.hasOwnProperty("conversion")
      ? new AmountConversion(data.conversion)
      : null;
    this.authorization = data.hasOwnProperty("authorization")
      ? data.authorization
      : null;
    this.receipt = data.hasOwnProperty("receipt") ? data.receipt : null;
    this.type = data.hasOwnProperty("type") ? data.type : null;
    this.refunded = data.hasOwnProperty("refunded") ? data.refunded : null;
    this.lastDigits = data.hasOwnProperty("lastDigits")
      ? data.lastDigits
      : null;
    this.provider = data.hasOwnProperty("provider") ? data.provider : null;
    this.discount = data.hasOwnProperty("discount") ? data.discount : null;
    this.processorFields = data.hasOwnProperty("processorFields")
      ? data.processorFields
      : null;
    this.additional = data.hasOwnProperty("additional")
      ? data.additional
      : null;
  }

  /**
   * @returns {any}
   */
  getStatus(): any {
    return this.status;
  }

  /**
   * @returns {any}
   */
  getDate(): any {
    return this.date;
  }

  /**
   * @returns {any}
   */
  getTransactionDate(): any {
    return this.transactionDate;
  }

  /**
   * @returns {number}
   */
  getInternalReference(): number {
    return this.internalReference;
  }

  /**
   * @returns {string}
   */
  getReference(): string {
    return this.reference;
  }

  /**
   * @returns {string}
   */
  getPaymentMethod(): string {
    return this.paymentMethod;
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
   * @returns {any}
   */
  getAmount(): any {
    return this.amount;
  }

  /**
   * @returns {any}
   */
  getConversion(): any {
    return this.conversion;
  }

  /**
   * @returns {string}
   */
  getAuthorization(): string {
    return this.authorization;
  }

  /**
   * @returns {number}
   */
  getReceipt(): number {
    return this.receipt;
  }

  /**
   * @returns {string}
   */
  getType(): string {
    return this.type;
  }

  /**
   * @returns {boolean}
   */
  getRefunded(): boolean {
    return this.refunded;
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
  getProvider(): string {
    return this.provider;
  }

  /**
   * @returns {number}
   */
  getDiscount(): number {
    return this.discount;
  }

  /**
   * @returns {any}
   */
  getProcessorFields(): any {
    return this.processorFields;
  }

  /**
   * @returns {any}
   */
  getAdditional(): any {
    return this.additional;
  }

  /**
   * @returns {boolean}
   */
  isSuccessful(): boolean {
    return ![Status.ST_ERROR, Status.ST_FAILED].includes(
      this.getStatus().getStatus()
    );
  }

  /**
   * @returns {boolean}
   */
  isApproved(): boolean {
    return this.getStatus().getStatus() == Status.ST_APPROVED;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      status: this.getStatus(),
      date: this.getDate(),
      transactionDate: this.getTransactionDate(),
      internalReference: this.getInternalReference(),
      reference: this.getReference(),
      paymentMethod: this.getPaymentMethod(),
      franchise: this.getFranchise(),
      franchiseName: this.getFranchiseName(),
      issuerName: this.getIssuerName(),
      amount: this.getAmount(),
      conversion: this.getConversion(),
      authorization: this.getAuthorization(),
      receipt: this.getReceipt(),
      type: this.getType(),
      refunded: this.getRefunded(),
      lastDigits: this.getLastDigits(),
      provider: this.getProvider(),
      discount: this.getDiscount(),
      processorFields: this.getProcessorFields(),
      additional: this.getAdditional(),
    });
  }
}
