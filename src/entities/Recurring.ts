import { Entity } from "../contracts/Entity";

/**
 * Class Recurring.
 */
export class Recurring extends Entity {
  protected periodicity: string;
  protected interval: number;
  protected nextPayment: string;
  protected maxPeriods: number;
  protected dueDate: string;
  protected notificationUrl: string;

  /**
   * Recurring constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
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
   * @return string
   */
  getPeriodicity(): string {
    return this.periodicity;
  }

  /**
   * @return number
   */
  getInterval(): number {
    return this.interval;
  }

  /**
   * @return string
   */
  getNextPayment(): string {
    return this.nextPayment;
  }

  /**
   * @return number
   */
  getMaxPeriods(): number {
    return this.maxPeriods;
  }

  /**
   * @return string
   */
  getDueDate(): string {
    return this.dueDate;
  }

  /**
   * @return string
   */
  getNotificationUrl(): string {
    return this.notificationUrl;
  }

  /**
   * @return @ny
   */
  toObject(): any {
    return {
      periodicity: this.getPeriodicity(),
      interval: this.getInterval(),
      nextPayment: this.getNextPayment(),
      maxPeriods: this.getMaxPeriods(),
      dueDate: this.getDueDate(),
      notificationUrl: this.getNotificationUrl(),
    };
  }
}
