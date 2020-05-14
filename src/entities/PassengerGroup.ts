import { Fare } from "./Fare";
import { PassengerCollection } from "../dto/result/PassengerCollection";

/**
 * @class
 */
export class PassengerGroup {
  /**
   * @type {Fare}
   */
  protected fare: Fare;

  /**
   * @type {string}
   */
  protected airlineCode: string;

  /**
   * @type {[]}
   */
  protected passengerUids: [];

  /**
   * @type {PassengerCollection}
   */
  protected passengers: PassengerCollection;

  /**
   * @constructor
   * @param {Fare} fare
   * @param {string} airlineCode
   * @param {[]} passengerUids
   * @param {PassengerCollection} passengers
   */
  constructor(
    fare: Fare,
    airlineCode: string,
    passengerUids: [],
    passengers: PassengerCollection
  ) {
    this.fare = fare;
    this.airlineCode = airlineCode;
    this.passengerUids = passengerUids;
    this.passengers = passengers;
  }

  /**
   * @returns {Fare}
   */
  getFare(): Fare {
    return this.fare;
  }

  /**
   * @returns {string}
   */
  getAirlineCode(): string {
    return this.airlineCode;
  }

  /**
   * @returns {[]}
   */
  getPassengerUids(): [] {
    return this.passengerUids;
  }

  /**
   * @returns {PassengerCollection}
   */
  getPassengers(): PassengerCollection {
    return this.passengers;
  }
}
