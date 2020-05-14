import { PQPassenger } from "./PQPassenger";

/**
 * @class
 */
export class PQPassengerCollection {
  /**
   * @type {Array<PQPassenger>}
   */
  public collection: Array<PQPassenger>;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  /**
   * @param {any} data
   * @returns {PQPassengerCollection}
   */
  static fromResponse(data: any): PQPassengerCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(PQPassenger.fromResponse(item));
    });

    return new this({ collection });
  }
}
