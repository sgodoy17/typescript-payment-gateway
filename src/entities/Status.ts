import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Status extends Entity {
  public static readonly ST_OK: string = "OK";
  public static readonly ST_FAILED: string = "FAILED";
  public static readonly ST_APPROVED: string = "APPROVED";
  public static readonly ST_APPROVED_PARTIAL: string = "APPROVED_PARTIAL";
  public static readonly ST_REJECTED: string = "REJECTED";
  public static readonly ST_PENDING: string = "PENDING";
  public static readonly ST_PENDING_VALIDATION: string = "PENDING_VALIDATION";
  public static readonly ST_REFUNDED: string = "REFUNDED";
  public static readonly ST_ERROR: string = "ERROR";
  public static readonly ST_UNKNOWN: string = "UNKNOWN";

  /**
   * @type {string}
   */
  protected status: string;

  /**
   * @type {string}
   */
  protected reason: string;

  /**
   * @type {string}
   */
  protected message: string;

  /**
   * @type {string}
   */
  protected date: string;

  protected static readonly STATUSES: string[] = [
    Status.ST_OK,
    Status.ST_FAILED,
    Status.ST_APPROVED,
    Status.ST_APPROVED_PARTIAL,
    Status.ST_REJECTED,
    Status.ST_PENDING,
    Status.ST_PENDING_VALIDATION,
    Status.ST_REFUNDED,
    Status.ST_ERROR,
    Status.ST_UNKNOWN,
  ];

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.status = data.hasOwnProperty("status") ? data.status : null;
    this.reason = data.hasOwnProperty("reason") ? data.reason.toString() : null;
    this.message = data.hasOwnProperty("message") ? data.message : null;
    this.date = data.hasOwnProperty("data") ? data.date : null;
  }

  /**
   * @returns {string}
   */
  getStatus(): string {
    return this.status;
  }

  /**
   * @returns {string}
   */
  getReason(): string {
    return this.reason;
  }

  /**
   * @returns {string}
   */
  getMessage(): string {
    return this.message;
  }

  /**
   * @returns {string}
   */
  getDate(): string {
    return this.date;
  }

  /**
   * @returns {boolean}
   */
  isFailed(): boolean {
    return this.getStatus() == Status.ST_FAILED;
  }

  /**
   * @returns {boolean}
   */
  isSuccessful(): boolean {
    return this.getStatus() == Status.ST_OK;
  }

  /**
   * @returns {boolean}
   */
  isApproved(): boolean {
    return this.getStatus() == Status.ST_APPROVED;
  }

  /**
   * @returns {boolean}
   */
  isRejected(): boolean {
    return this.getStatus() == Status.ST_REJECTED;
  }

  /**
   * @returns {boolean}
   */
  isError(): boolean {
    return this.getStatus() == Status.ST_ERROR;
  }

  /**
   * @param {string} status
   * @returns {any}
   */
  static validStatus(status: string): any {
    if (typeof status !== "undefined") {
      return Status.STATUSES.includes(status);
    }

    return Status.STATUSES;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      status: this.getStatus(),
      reason: this.getReason(),
      message: this.getMessage(),
      date: this.getDate(),
    });
  }
}
