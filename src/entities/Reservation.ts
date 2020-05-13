import { Entity } from "../contracts/Entity";
import { Segment } from "./Segment";
import { Passenger } from "./Passenger";

/**
 * @class
 * @extends {Entity}
 */
export class Reservation extends Entity {
  /**
   * @type {string}
   */
  protected locator: string;

  /**
   * @type {string}
   */
  protected route: string;

  /**
   * @type {any}
   */
  protected segments: any;

  /**
   * @type {any}
   */
  protected passengers: any;

  /**
   * @type {any}
   */
  protected passengerAssociations: any;

  /**
   * @type {any}
   */
  protected airlineFares: any;

  /**
   * @type {any}
   */
  protected priceQuotes: any;

  /**
   * @type {string}
   */
  protected rawResponse: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.locator = data.hasOwnProperty("locator") ? data.locator : null;
    this.route = data.hasOwnProperty("route") ? data.route : null;
    this.segments = data.hasOwnProperty("segments")
      ? this.setSegments(data.segments)
      : null;
    this.passengers = data.hasOwnProperty("passengers")
      ? this.setPassengers(data.passengers)
      : null;
    this.passengerAssociations = data.hasOwnProperty("passenger_associations")
      ? data.passenger_associations
      : null;
    this.airlineFares = data.hasOwnProperty("airline_fares")
      ? data.airline_fares
      : null;
    this.priceQuotes = data.hasOwnProperty("price_quotes")
      ? data.price_quotes
      : null;
    this.rawResponse = data;
  }

  /**
   * @returns {string}
   */
  getLocator(): string {
    return this.locator;
  }

  /**
   * @returns {string}
   */
  getRoute(): string {
    return this.route;
  }

  /**
   * @returns {any}
   */
  getSegments(): any {
    return this.segments;
  }

  /**
   * @returns {any}
   */
  getPassengers(): any {
    return this.passengers;
  }

  /**
   * @returns {any}
   */
  getPassengerAssociations(): any {
    return this.passengerAssociations;
  }

  /**
   * @returns {any}
   */
  getAirlineFares(): any {
    return this.airlineFares;
  }

  /**
   * @returns {any}
   */
  getPriceQuotes(): any {
    return this.priceQuotes;
  }

  /**
   * @returns {string}
   */
  getRawResponse(): string {
    return this.rawResponse;
  }

  /**
   * @param {any} segments
   * @returns {any}
   */
  setSegments(segments: any): any {
    let result: any = [];

    segments.forEach((segment: any) => {
      if (segment instanceof Object) {
        segment = new Segment(segment);

        result.push(segment);
      }
    });

    return result;
  }

  /**
   * @returns {any}
   */
  private segmentsToArray(): any {
    if (this.getSegments()) {
      let segments: any = [];

      this.getSegments().forEach((segment: any) => {
        segments.push(segment instanceof Segment ? segment.toObject() : null);
      });

      return segments;
    }

    return null;
  }

  /**
   * @param {any} passengers
   * @returns {any}
   */
  setPassengers(passengers: any): any {
    let result: any = [];

    passengers.forEach((passenger: any) => {
      if (passenger instanceof Object) {
        passenger = new Passenger(passenger);

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
          passenger instanceof Passenger ? passenger.toObject() : null
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
      locator: this.getLocator(),
      route: this.getRoute(),
      segments: this.segmentsToArray(),
      passengers: this.passengersToArray(),
      passengerAssociations: this.getPassengerAssociations(),
      airlineFares: this.getAirlineFares(),
      priceQuotes: this.getPriceQuotes(),
      rawResponse: this.getRawResponse(),
    });
  }
}
