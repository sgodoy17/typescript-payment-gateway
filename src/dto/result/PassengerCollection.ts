import { Passenger } from "./Passenger";

export class PassengerCollection {
  public collection: PassengerCollection;

  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  static fromResponse(data: any): PassengerCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(Passenger.fromResponse(item));
    });

    return new this({ collection });
  }
}
