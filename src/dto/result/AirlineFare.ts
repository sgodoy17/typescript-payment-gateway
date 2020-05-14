import { Fare } from "./Fare";

/**
 * @class
 */
export class AirlineFare {
  /**
   * @type {string}
   */
  public airlineCode: string;

  /**
   * @type {Fare}
   */
  public fare: Fare;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.airlineCode = data.airlineCode;
    this.fare = data.fare;
  }

  /**
   * @param {any} data
   * @returns {AirlineFare}
   */
  static fromResponse(data: any): AirlineFare {
    return new this({
      airlineCode: data.airline_code,
      fare: Fare.fromResponse(data.fare),
    });
  }
}
