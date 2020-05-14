import { Fare as FareDTO } from "../dto/result/Fare";
import { Money } from "../dto/result/Money";
import { TaxesCollection } from "./TaxesCollection";

/**
 * @class
 */
export class Fare {
  /**
   * @type {Money}
   */
  protected baseFare: Money;

  /**
   * @type {Money}
   */
  protected totalTax: Money;

  /**
   * @type {Money}
   */
  protected totalFare: Money;

  /**
   * @type {TaxesCollection}
   */
  protected taxesCollection: TaxesCollection;

  /**
   * @constructor
   * @param {Money} baseFare
   * @param {Money} totalTax
   * @param {Money} totalFare
   * @param {TaxesCollection} taxesCollection
   */
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

  /**
   * @returns {Money}
   */
  getBaseFare(): Money {
    return this.baseFare;
  }

  /**
   * @returns {Money}
   */
  getTotalTax(): Money {
    return this.totalTax;
  }

  /**
   * @returns {Money}
   */
  getTotalFare(): Money {
    return this.totalFare;
  }

  /**
   * @returns {TaxesCollection}
   */
  getTaxesCollection(): TaxesCollection {
    return this.taxesCollection;
  }

  /**
   * @param {FareDTO} fare
   * @returns {Fare}
   */
  static fromDTO(fare: FareDTO): Fare {
    return new this(
      fare.baseFare,
      fare.totalTax,
      fare.totalFare,
      TaxesCollection.fromDTO(fare.taxesCollection)
    );
  }

  /**
   * @param {Fare} add
   * @returns {Fare}
   */
  add(add: Fare): Fare {
    return new Fare(
      this.baseFare.add(add.getBaseFare()),
      this.totalTax.add(add.getTotalTax()),
      this.totalFare.add(add.getTotalFare()),
      this.taxesCollection.add(add.getTaxesCollection())
    );
  }

  /**
   * @param {FareDTO} fare
   * @returns {Fare}
   */
  addDTO(fare: FareDTO): Fare {
    return this.add(Fare.fromDTO(fare));
  }
}
