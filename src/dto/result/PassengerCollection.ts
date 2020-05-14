import { Passenger } from "./Passenger";

export class PassengerCollection {
  protected collection: Array<Passenger>;

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

  first(): any {
    let result: any = [];

    this.collection.forEach((item: Passenger, index) => {
      if (index == 0) {
        result = item;
      }
    });

    return result;
  }
}
