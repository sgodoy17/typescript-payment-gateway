import { Fare } from "./Fare";
import { PQPassengerCollection } from "./PQPassengerCollection";

export class PriceQuote {
  public number: number;
  public airlineCode: string;
  public fare: Fare;
  public passengers: PQPassengerCollection;

  constructor(data: any = {}) {
    this.number = data.number;
    this.airlineCode = data.airlineCode;
    this.fare = data.fare;
    this.passengers = data.passengers;
  }

  static fromResponse(data: any): PriceQuote {
    return new this({
      number: data.number,
      airlineCode: data.airline_code,
      fare: Fare.fromResponse(data.fare),
      passengers: PQPassengerCollection.fromResponse(data.passengers),
    });
  }
}
