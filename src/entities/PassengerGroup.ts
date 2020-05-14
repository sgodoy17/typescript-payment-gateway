import { Fare } from "./Fare";
import { PassengerCollection } from "../dto/result/PassengerCollection";

export class PassengerGroup {
  protected fare: Fare;
  protected airlineCode: string;
  protected passengerUids: [];
  protected passengers: PassengerCollection;

  constructor(
    fare: Fare,
    airlineCode: string,
    passengerUids: [],
    passengers: PassengerCollection
  ) {
    this.fare = fare;
    this.airlineCode = airlineCode;
    this.passengerUids = passengerUids;
    this.passengers = passengers;
  }

  getFare(): Fare {
    return this.fare;
  }

  getAirlineCode(): string {
    return this.airlineCode;
  }

  getPassengerUids(): [] {
    return this.passengerUids;
  }

  getPassengers(): PassengerCollection {
    return this.passengers;
  }
}
