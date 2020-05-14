import { Money } from "../dto/result/Money";
import { TaxesCollection as TaxesCollectionDTO } from "../dto/result/TaxesCollection";

/**
 * @class
 */
export class TaxesCollection {
  /**
   * @type {Money}
   */
  protected vat: Money;

  /**
   * @type {Money}
   */
  protected otherTaxes: Money;

  /**
   * @constructor
   * @param {Money} iva
   * @param {Money} otherTaxes
   */
  constructor(iva: Money, otherTaxes: Money) {
    this.vat = iva;
    this.otherTaxes = otherTaxes;
  }

  /**
   * @returns {Money}
   */
  getVAT(): Money {
    return this.vat;
  }

  /**
   * @returns {Money}
   */
  getIVA(): Money {
    return this.getVAT();
  }

  /**
   * @returns {Money}
   */
  getOtherTaxes(): Money {
    return this.otherTaxes;
  }

  /**
   * @param {TaxesCollectionDTO} taxesCollection
   * @returns {TaxesCollection}
   */
  static fromDTO(taxesCollection: TaxesCollectionDTO): TaxesCollection {
    return new this(taxesCollection.iva, taxesCollection.otherTaxes);
  }

  /**
   * @param {TaxesCollection} add
   * @returns {TaxesCollection}
   */
  add(add: TaxesCollection): TaxesCollection {
    return new TaxesCollection(
      this.vat.add(add.vat),
      this.otherTaxes.add(add.otherTaxes)
    );
  }
}
