import { PriceQuote } from "./PriceQuote";
import { Passenger } from "./Passenger";

export class PassengerAssociation {
  public uid: string;
  public priceQuoteNumber: number;
  public passengerNameId: string;
  public priceQuote: PriceQuote;
  public passenger: Passenger;

  constructor(data: any = {}) {
    this.uid = data.uid;
    this.priceQuoteNumber = data.priceQuoteNumber;
    this.passengerNameId = data.passengerNameId;
    this.priceQuote = data.priceQuote;
    this.passenger = data.passenger;
  }

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
