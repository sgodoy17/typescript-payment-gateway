import { PQPassenger } from "./PQPassenger";

export class PQPassengerCollection {
  public collection: PQPassengerCollection;

  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  static fromResponse(data: any): PQPassengerCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(PQPassenger.fromResponse(item));
    });

    return new this({ collection });
  }
}
