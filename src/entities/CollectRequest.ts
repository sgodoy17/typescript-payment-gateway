import { Entity } from "../contracts/Entity";
import { Person } from "./Person";

/**
 * Class CollectRequest.
 */
export class CollectRequest extends Entity {
  protected locale: string = "es_CO";
  protected payer: any;
  protected buyer: any;
  protected payment: any;
  protected instrument: any;
  protected additional: any;

  /**
   * CollectRequest constructor.
   *
   * @param {any} data Object to load in this entity.
   */
  constructor(data: any = []) {
    super();

    this.locale = data.hasOwnProperty("locale") ? data.locale : null;
    this.payer = data.hasOwnProperty("payer") ? new Person(data.payer) : null;
    this.buyer = data.hasOwnProperty("buyer") ? data.buyer : null;
    this.payment = data.hasOwnProperty("payment") ? data.payment : null;
    this.instrument = data.hasOwnProperty("instrument")
      ? data.instrument
      : null;
    this.additional = data.hasOwnProperty("additional")
      ? data.additional
      : null;
  }

  /**
   * @returns {string} Locale string value.
   */
  getLocale(): string {
    return this.locale;
  }

  /**
   * @returns {any} Object of type Person.
   */
  getPayer(): any {
    return this.payer;
  }

  /**
   * @returns {any} Object of type Person.
   */
  getBuyer(): any {
    return this.buyer;
  }

  /**
   * @returns {any} Object of type Payment.
   */
  getPayment(): any {
    return this.payment;
  }

  /**
   * @returns {any} Object of type Instrument.
   */
  getInstrument(): any {
    return this.instrument;
  }

  /**
   * @returns {any} Object of type Additional.
   */
  getAdditional(): any {
    return this.additional;
  }

  /**
   * @returns {any} Object that represents this instance.
   */
  toObject(): any {
    return this.arrayFilter({
      locale: this.getLocale(),
      payer: this.getPayer().toObject(),
      buyer: this.getBuyer(),
      payment: this.getPayment(),
      instrument: this.getInstrument(),
      additional: this.getAdditional(),
    });
  }
}
