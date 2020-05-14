import { Airline } from "./Airline";
import { Cabin } from "./Cabin";
import { Location } from "./Location";

/**
 * @class
 */
export class Segment {
  /**
   * @type {number}
   */
  public sequence: number;

  /**
   * @type {string}
   */
  public flightNumber: string;

  /**
   * @type {Airline}
   */
  public airline: Airline;

  /**
   * @type {Cabin}
   */
  public cabin: Cabin;

  /**
   * @type {Location}
   */
  public departure: Location;

  /**
   * @type {Location}
   */
  public arrival: Location;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.sequence = data.sequence;
    this.flightNumber = data.flightNumber;
    this.airline = data.airline;
    this.cabin = data.cabin;
    this.departure = data.departure;
    this.arrival = data.arrival;
  }

  /**
   * @param {any} data
   * @returns {Segment}
   */
  static fromResponse(data: any): Segment {
    return new this({
      sequence: data.sequence,
      flightNumber: data.flight_number,
      airline: new Airline(data.airline),
      cabin: new Cabin(data.cabin),
      departure: Location.fromResponse(data.departure),
      arrival: Location.fromResponse(data.arrival),
    });
  }
}
