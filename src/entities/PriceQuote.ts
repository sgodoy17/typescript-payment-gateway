import { Entity } from "../contracts/Entity";
import { Fare } from "./Fare";
import { PQPassenger } from "./PQPassenger";

/**
 * @class
 * @extends {Entity}
 */
export class PriceQuote extends Entity {
  /**
   * @type {number}
   */
  protected number: number;

  /**
   * @type {string}
   */
  protected airlineCode: string;

  /**
   * @type {any}
   */
  protected fare: any;

  /**
   * @type {any}
   */
  protected passengers: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.number = data.hasOwnProperty("number") ? data.number : null;
    this.airlineCode = data.hasOwnProperty("airline_code")
      ? data.airline_code
      : null;
    this.fare = data.hasOwnProperty("fare") ? new Fare(data.fare) : null;
    this.passengers = data.hasOwnProperty("passengers")
      ? this.setPassengers(data.passengers)
      : null;
  }

  /**
   * @returns {number}
   */
  getNumber(): number {
    return this.number;
  }

  /**
   * @returns {string}
   */
  getAirlineCode(): string {
    return this.airlineCode;
  }

  /**
   * @returns {any}
   */
  getFare(): any {
    return this.fare;
  }

  /**
   * @returns {any}
   */
  getPassengers(): any {
    return this.passengers;
  }

  /**
   * @param {any} passengers
   * @returns {any}
   */
  setPassengers(passengers: any): any {
    let result: any = [];

    passengers.forEach((passenger: any) => {
      if (passenger instanceof Object) {
        passenger = new PQPassenger(passenger);

        result.push(passenger);
      }
    });

    return result;
  }

  /**
   * @returns {any}
   */
  private passengersToArray(): any {
    if (this.getPassengers()) {
      let passengers: any = [];

      this.getPassengers().forEach((passenger: any) => {
        passengers.push(
          passenger instanceof PQPassenger ? passenger.toObject() : null
        );
      });

      return passengers;
    }

    return null;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      number: this.getNumber(),
      airlineCode: this.getAirlineCode(),
      fare: this.getFare().toObject(),
      passengers: this.passengersToArray(),
    });
  }
}
