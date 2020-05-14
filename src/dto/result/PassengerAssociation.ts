import { PriceQuote } from "./PriceQuote";
import { Passenger } from "./Passenger";

/**
 * @class
 */
export class PassengerAssociation {
  /**
   * @type {string}
   */
  public uid: string;

  /**
   * @type {number}
   */
  public priceQuoteNumber: number;

  /**
   * @type {string}
   */
  public passengerNameId: string;

  /**
   * @type {PriceQuote}
   */
  public priceQuote: PriceQuote;

  /**
   * @type {Passenger}
   */
  public passenger: Passenger;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.uid = data.uid;
    this.priceQuoteNumber = data.priceQuoteNumber;
    this.passengerNameId = data.passengerNameId;
    this.priceQuote = data.priceQuote;
    this.passenger = data.passenger;
  }

  /**
   * @param {any} data
   * @returns {PassengerAssociation}
   */
  static fromResponse(data: any): PassengerAssociation {
    return new this({
      uid: data.uid,
      priceQuoteNumber: data.price_quote_number,
      passengerNameId: data.passenger_name_id,
      priceQuote: PriceQuote.fromResponse(data.price_quote),
      passenger: Passenger.fromResponse(data.passenger),
    });
  }
}
