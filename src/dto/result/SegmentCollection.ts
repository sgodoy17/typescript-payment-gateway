import { Segment } from "./Segment";

export class SegmentCollection {
  public collection: SegmentCollection;

  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  static fromResponse(data: any): SegmentCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(Segment.fromResponse(item));
    });

    return new this({ collection });
  }
}
