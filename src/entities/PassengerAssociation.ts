import { Entity } from "../contracts/Entity";
import { Passenger } from "./Passenger";
import { PriceQuote } from "./PriceQuote";

/**
 * @class
 * @extends {Entity}
 */
export class PassengerAssociation extends Entity {
  /**
   * @type {string}
   */
  protected uid: string;

  /**
   * @type {number}
   */
  protected priceQuoteNumber: number;

  /**
   * @type {string}
   */
  protected passengerNameId: string;

  /**
   * @type {any}
   */
  protected priceQuote: any;

  /**
   * @type {any}
   */
  protected passenger: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.uid = data.hasOwnProperty("uid") ? data.uid : null;
    this.priceQuoteNumber = data.hasOwnProperty("price_quote_number")
      ? data.price_quote_number
      : null;
    this.passengerNameId = data.hasOwnProperty("passenger_name_id")
      ? data.passenger_name_id
      : null;
    this.priceQuote = data.hasOwnProperty("price_quote")
      ? new PriceQuote(data.price_quote)
      : null;
    this.passenger = data.hasOwnProperty("passenger")
      ? new Passenger(data.passenger)
      : null;
  }

  /**
   * @returns {string}
   */
  getUid(): string {
    return this.uid;
  }

  /**
   * @returns {number}
   */
  getPriceQuoteNumber(): number {
    return this.priceQuoteNumber;
  }

  /**
   * @returns {string}
   */
  getPassengerNameId(): string {
    return this.passengerNameId;
  }

  /**
   * @returns {any}
   */
  getPriceQuote(): any {
    return this.priceQuote;
  }

  /**
   * @returns {any}
   */
  getPassenger(): any {
    return this.passenger;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      uid: this.getUid(),
      priceQuoteNumber: this.getPriceQuoteNumber(),
      passengerNameId: this.getPassengerNameId(),
      priceQuote: this.getPriceQuote().toObject(),
      passenger: this.getPassenger().toObject(),
    });
  }
}
