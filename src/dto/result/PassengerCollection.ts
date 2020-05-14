import { Passenger } from "./Passenger";

/**
 * @class
 */
export class PassengerCollection {
  /**
   * @type {Array<Passenger>}
   */
  protected collection: Array<Passenger>;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  /**
   * @param {any} data
   * @returns {PassengerCollection}
   */
  static fromResponse(data: any): PassengerCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(Passenger.fromResponse(item));
    });

    return new this({ collection });
  }

  /**
   * @returns {any}
   */
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
