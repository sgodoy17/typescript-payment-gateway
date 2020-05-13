import { PassengerAssociation } from "./PassengerAssociation";

export class PassengerAssociationCollection {
  public collection: PassengerAssociationCollection;

  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  static fromResponse(data: any): PassengerAssociationCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(PassengerAssociation.fromResponse(item));
    });

    return new this({ collection });
  }

  groupByAirline() {
    let groupedResults: any = [];

    Object.entries(this.collection).forEach(([key, value]) => {
      let groupBy = value.priceQuote.airlineCode;
      
      groupedResults.push(groupBy);
    });

    //console.log(groupedResults);
    
    return this;
  }
}
