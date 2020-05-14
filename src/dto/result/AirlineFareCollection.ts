import { AirlineFare } from "./AirlineFare";

/**
 * @class
 */
export class AirlineFareCollection {
  /**
   * @type {Array<AirlineFare>}
   */
  public collection: Array<AirlineFare>;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  /**
   * @param {any} data
   * @returns {AirlineFareCollection}
   */
  static fromResponse(data: any): AirlineFareCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(AirlineFare.fromResponse(item));
    });

    return new this({ collection });
  }
}
