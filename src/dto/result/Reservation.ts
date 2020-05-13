import { SegmentCollection } from "./SegmentCollection";
import { PassengerCollection } from "./PassengerCollection";
import { PassengerAssociationCollection } from "./PassengerAssociationCollection";
import { AirlineFareCollection } from "./AirlineFareCollection";
import { PriceQuoteCollection } from "./PriceQuoteCollection";

export class Reservation {
  public locator: string;
  public route: string;
  public segments: SegmentCollection;
  public passengers: PassengerCollection;
  public passengerAssociations: PassengerAssociationCollection;
  public airlineFares: AirlineFareCollection;
  public priceQuotes: PriceQuoteCollection;
  public rawResponse: Object;

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
