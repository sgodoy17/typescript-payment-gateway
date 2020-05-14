import { Fare } from "./Fare";
import { PQPassengerCollection } from "./PQPassengerCollection";

/**
 * @class
 */
export class PriceQuote {
  /**
   * @type {number}
   */
  public number: number;

  /**
   * @type {string}
   */
  public airlineCode: string;

  /**
   * @type {Fare}
   */
  public fare: Fare;

  /**
   * @type {PQPassengerCollection}
   */
  public passengers: PQPassengerCollection;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.number = data.number;
    this.airlineCode = data.airlineCode;
    this.fare = data.fare;
    this.passengers = data.passengers;
  }

  /**
   * @param {any} data
   * @returns {PriceQuote}
   */
  static fromResponse(data: any): PriceQuote {
    return new this({
      number: data.number,
      airlineCode: data.airline_code,
      fare: Fare.fromResponse(data.fare),
      passengers: PQPassengerCollection.fromResponse(data.passengers),
    });
  }
}
