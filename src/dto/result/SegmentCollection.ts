import { Segment } from "./Segment";

/**
 * @class
 */
export class SegmentCollection {
  /**
   * @type {Array<Segment>}
   */
  public collection: Array<Segment>;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  /**
   * @param {any} data
   * @returns {SegmentCollection}
   */
  static fromResponse(data: any): SegmentCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(Segment.fromResponse(item));
    });

    return new this({ collection });
  }
}
