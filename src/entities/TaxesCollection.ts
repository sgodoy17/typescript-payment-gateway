import { Money } from "../dto/result/Money";
import { TaxesCollection as TaxesCollectionDTO } from "../dto/result/TaxesCollection";

export class TaxesCollection {
  protected vat: Money;
  protected otherTaxes: Money;

  constructor(iva: Money, otherTaxes: Money) {
    this.vat = iva;
    this.otherTaxes = otherTaxes;
  }

  getVAT(): Money {
    return this.vat;
  }

  getIVA(): Money {
    return this.getVAT();
  }

  getOtherTaxes(): Money {
    return this.otherTaxes;
  }

  static fromDTO(taxesCollection: TaxesCollectionDTO): TaxesCollection {
    return new this(taxesCollection.iva, taxesCollection.otherTaxes);
  }

  add(add: TaxesCollection): TaxesCollection {
    return new TaxesCollection(
      this.vat.add(add.vat),
      this.otherTaxes.add(add.otherTaxes)
    );
  }
}
