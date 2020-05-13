import { PriceQuote } from "./PriceQuote";

export class PriceQuoteCollection {
  public collection: PriceQuoteCollection;

  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  static fromResponse(data: any): PriceQuoteCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(PriceQuote.fromResponse(item));
    });

    return new this({ collection });
  }
}
