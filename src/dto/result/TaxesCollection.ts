import { Money } from "./Money";

export class TaxesCollection {
  public iva: Money;
  public otherTaxes: Money;

  constructor(data: any = {}) {
    this.iva = data.iva;
    this.otherTaxes = data.otherTaxes;
  }

  static fromResponse(data: any): TaxesCollection {
    return new this({
      iva: new Money(data.iva),
      otherTaxes: new Money(data.other_taxes),
    });
  }
}
