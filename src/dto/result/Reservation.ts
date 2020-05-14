import { SegmentCollection } from "./SegmentCollection";
import { PassengerCollection } from "./PassengerCollection";
import { PassengerAssociationCollection } from "./PassengerAssociationCollection";
import { AirlineFareCollection } from "./AirlineFareCollection";
import { PriceQuoteCollection } from "./PriceQuoteCollection";

/**
 * @class
 */
export class Reservation {
  /**
   * @type {string}
   */
  public locator: string;

  /**
   * @type {string}
   */
  public route: string;

  /**
   * @type {SegmentCollection}
   */
  public segments: SegmentCollection;

  /**
   * @type {PassengerCollection}
   */
  public passengers: PassengerCollection;

  /**
   * @type {PassengerAssociationCollection}
   */
  public passengerAssociations: PassengerAssociationCollection;

  /**
   * @type {AirlineFareCollection}
   */
  public airlineFares: AirlineFareCollection;

  /**
   * @type {PriceQuoteCollection}
   */
  public priceQuotes: PriceQuoteCollection;

  /**
   * @type {Object}
   */
  public rawResponse: Object;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any) {
    this.locator = data.locator;
    this.route = data.route;
    this.segments = data.segments;
    this.passengers = data.passengers;
    this.passengerAssociations = data.passengerAssociations;
    this.airlineFares = data.airlineFares;
    this.priceQuotes = data.priceQuotes;
    this.rawResponse = data.rawResponse;
  }

  /**
   * @param {any} data
   * @returns {Reservation}
   */
  static fromResponse(data: any): Reservation {
    return new this({
      locator: data.locator,
      route: data.route,
      segments: SegmentCollection.fromResponse(data.segments),
      passengers: PassengerCollection.fromResponse(data.passengers),
      passengerAssociations: PassengerAssociationCollection.fromResponse(
        data.passenger_associations
      ),
      airlineFares: AirlineFareCollection.fromResponse(data.airline_fares),
      priceQuotes: PriceQuoteCollection.fromResponse(data.price_quotes),
      rawResponse: data,
    });
  }
}
