import { Fare as FareDTO } from "../dto/result/Fare";
import { Money } from "../dto/result/Money";
import { TaxesCollection } from "./TaxesCollection";

export class Fare {
  protected baseFare: Money;
  protected totalTax: Money;
  protected totalFare: Money;
  protected taxesCollection: TaxesCollection;

  constructor(
    baseFare: Money,
    totalTax: Money,
    totalFare: Money,
    taxesCollection: TaxesCollection
  ) {
    this.baseFare = baseFare;
    this.totalTax = totalTax;
    this.totalFare = totalFare;
    this.taxesCollection = taxesCollection;
  }

  getBaseFare(): Money {
    return this.baseFare;
  }

  getTotalTax(): Money {
    return this.totalTax;
  }

  getTotalFare(): Money {
    return this.totalFare;
  }

  getTaxesCollection(): TaxesCollection {
    return this.taxesCollection;
  }

  static fromDTO(fare: FareDTO): Fare {
    return new this(
      fare.baseFare,
      fare.totalTax,
      fare.totalFare,
      TaxesCollection.fromDTO(fare.taxesCollection)
    );
  }

  add(add: Fare): Fare {
    return new Fare(
      this.baseFare.add(add.getBaseFare()),
      this.totalTax.add(add.getTotalTax()),
      this.totalFare.add(add.getTotalFare()),
      this.taxesCollection.add(add.getTaxesCollection())
    );
  }

  addDTO(fare: FareDTO): Fare {
    return this.add(Fare.fromDTO(fare));
  }
}
