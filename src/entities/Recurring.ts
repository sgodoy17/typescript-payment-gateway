import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Recurring extends Entity {
  /**
   * @type {string}
   */
  protected periodicity: string;

  /**
   * @type {number}
   */
  protected interval: number;

  /**
   * @type {string}
   */
  protected nextPayment: string;

  /**
   * @type {number}
   */
  protected maxPeriods: number;

  /**
   * @type {string}
   */
  protected dueDate: string;

  /**
   * @type {string}
   */
  protected notificationUrl: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.periodicity = data.hasOwnProperty("periodicity")
      ? data.periodicity
      : null;
    this.interval = data.hasOwnProperty("interval") ? data.interval : null;
    this.nextPayment = data.hasOwnProperty("nextPayment")
      ? data.nextPayment
      : null;
    this.maxPeriods = data.hasOwnProperty("maxPeriods")
      ? data.maxPeriods
      : null;
    this.dueDate = data.hasOwnProperty("dueDate") ? data.dueDate : null;
    this.notificationUrl = data.hasOwnProperty("notificationUrl")
      ? data.notificationUrl
      : null;
  }

  /**
   * @returns {string}
   */
  getPeriodicity(): string {
    return this.periodicity;
  }

  /**
   * @returns {number}
   */
  getInterval(): number {
    return this.interval;
  }

  /**
   * @returns {string}
   */
  getNextPayment(): string {
    return this.nextPayment;
  }

  /**
   * @returns {number}
   */
  getMaxPeriods(): number {
    return this.maxPeriods;
  }

  /**
   * @returns {string}
   */
  getDueDate(): string {
    return this.dueDate;
  }

  /**
   * @returns {string}
   */
  getNotificationUrl(): string {
    return this.notificationUrl;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      periodicity: this.getPeriodicity(),
      interval: this.getInterval(),
      nextPayment: this.getNextPayment(),
      maxPeriods: this.getMaxPeriods(),
      dueDate: this.getDueDate(),
      notificationUrl: this.getNotificationUrl(),
    });
  }
}
