import { AirlineFare } from "./AirlineFare";

export class AirlineFareCollection {
  public collection: AirlineFareCollection;

  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  static fromResponse(data: any): AirlineFareCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(AirlineFare.fromResponse(item));
    });

    return new this({ collection });
  }
}
