import { Reservation } from "./Reservation";

/**
 * @class
 */
export class Transaction {
  /**
   * @type {Reservation}
   */
  protected reservation: Reservation;

  /**
   * @type {any}
   */
  protected payment: any;

  /**
   * @type {any}
   */
  protected queue: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any) {
    this.reservation = data.reservation;
    this.payment = data.payment;
    this.queue = data.queue;
  }

  /**
   * @param {any} data
   * @returns {Transaction}
   */
  static fromResponse(data: any): Transaction {
    return new this({
      reservation: Reservation.fromResponse(data.reservation),
      payment: data.payment ?? null,
      queue: data.queue ?? null,
    });
  }
}
