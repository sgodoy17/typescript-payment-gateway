import { Airline } from "./Airline";
import { Cabin } from "./Cabin";
import { Entity } from "../contracts/Entity";
import { Location } from "./Location";

/**
 * @class
 * @extends {Entity}
 */
export class Segment extends Entity {
  /**
   * @type {number}
   */
  protected sequence: number;

  /**
   * @type {string}
   */
  protected flightNumber: string;

  /**
   * @type {any}
   */
  protected airline: any;

  /**
   * @type {any}
   */
  protected cabin: any;

  /**
   * @type {any}
   */
  protected departure: any;

  /**
   * @type {any}
   */
  protected arrival: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.sequence = data.hasOwnProperty("sequence") ? data.sequence : null;
    this.flightNumber = data.hasOwnProperty("flight_number")
      ? data.flight_number
      : null;
    this.airline = data.hasOwnProperty("airline")
      ? new Airline(data.airline)
      : null;
    this.cabin = data.hasOwnProperty("cabin") ? new Cabin(data.cabin) : null;
    this.departure = data.hasOwnProperty("departure")
      ? new Location(data.departure)
      : null;
    this.arrival = data.hasOwnProperty("arrival")
      ? new Location(data.arrival)
      : null;
  }

  /**
   * @returns {number}
   */
  getSequence(): number {
    return this.sequence;
  }

  /**
   * @returns {string}
   */
  getFlightNumber(): string {
    return this.flightNumber;
  }

  /**
   * @returns {any}
   */
  getAirline(): any {
    return this.airline;
  }

  /**
   * @returns {any}
   */
  getCabin(): any {
    return this.cabin;
  }

  /**
   * @returns {any}
   */
  getDeparture(): any {
    return this.departure;
  }

  /**
   * @returns {any}
   */
  getArrival(): any {
    return this.arrival;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      sequence: this.getSequence(),
      flightNumber: this.getFlightNumber(),
      airline: this.getAirline().toObject(),
      cabin: this.getCabin().toObject(),
      departure: this.getDeparture().toObject(),
      arrival: this.getArrival().toObject(),
    });
  }
}
