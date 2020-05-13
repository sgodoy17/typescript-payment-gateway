import { Money } from "./Money";
import { TaxesCollection } from "./TaxesCollection";

export class Fare {
  public baseFare: Money;
  public totalTax: Money;
  public totalFare: Money;
  public taxesCollection: TaxesCollection;

  constructor(data: any = {}) {
    this.baseFare = data.baseFare;
    this.totalTax = data.totalTax;
    this.totalFare = data.totalFare;
    this.taxesCollection = data.taxesCollection;
  }

  static fromResponse(data: any): Fare {
    return new this({
      baseFare: new Money(data.base_fare),
      totalTax: new Money(data.total_tax),
      totalFare: new Money(data.total_fare),
      taxesCollection: TaxesCollection.fromResponse(data.taxes_collection),
    });
  }
}
