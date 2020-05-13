import { Airline } from "./Airline";
import { Cabin } from "./Cabin";
import { Location } from "./Location";

export class Segment {
  public sequence: number;
  public flightNumber: string;
  public airline: Airline;
  public cabin: Cabin;
  public departure: Location;
  public arrival: Location;

  constructor(data: any = {}) {
    this.sequence = data.sequence;
    this.flightNumber = data.flightNumber;
    this.airline = data.airline;
    this.cabin = data.cabin;
    this.departure = data.departure;
    this.arrival = data.arrival;
  }

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
