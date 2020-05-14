import { PriceQuote } from "./PriceQuote";

/**
 * @class
 */
export class PriceQuoteCollection {
  /**
   * @type {Array<PriceQuote>}
   */
  public collection: Array<PriceQuote>;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  /**
   * @param {any} data
   * @returns {PriceQuoteCollection}
   */
  static fromResponse(data: any): PriceQuoteCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(PriceQuote.fromResponse(item));
    });

    return new this({ collection });
  }
}
