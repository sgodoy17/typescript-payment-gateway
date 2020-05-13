import { Fare } from "./Fare";

export class AirlineFare {
  public airlineCode: string;
  public fare: Fare;

  constructor(data: any = {}) {
    this.airlineCode = data.airlineCode;
    this.fare = data.fare;
  }

  static fromResponse(data: any): AirlineFare {
    return new this({
      airlineCode: data.airline_code,
      fare: Fare.fromResponse(data.fare),
    });
  }
}
