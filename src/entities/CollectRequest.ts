import { Entity } from "../contracts/Entity";
import { Payment } from "./Payment";
import { Person } from "./Person";
import { Instrument } from "./Instrument";

/**
 * @class
 * @extends {Entity}
 */
export class CollectRequest extends Entity {
  /**
   * @type {string}
   */
  protected locale: string = "es_CO";

  /**
   * @type {any}
   */
  protected payer: any;

  /**
   * @type {any}
   */
  protected buyer: any;

  /**
   * @type {any}
   */
  protected payment: any;

  /**
   * @type {any}
   */
  protected instrument: any;

  /**
   * @type {any}
   */
  protected additional: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.locale = data.hasOwnProperty("locale") ? data.locale : null;
    this.payer = data.hasOwnProperty("payer") ? new Person(data.payer) : null;
    this.buyer = data.hasOwnProperty("buyer") ? new Person(data.buyer) : null;
    this.payment = data.hasOwnProperty("payment")
      ? new Payment(data.payment)
      : null;
    this.instrument = data.hasOwnProperty("instrument")
      ? new Instrument(data.instrument)
      : null;
    this.additional = data.hasOwnProperty("additional")
      ? data.additional
      : null;
  }

  /**
   * @returns {string}
   */
  getLocale(): string {
    return this.locale;
  }

  /**
   * @returns {any}
   */
  getPayer(): any {
    return this.payer;
  }

  /**
   * @returns {any}
   */
  getBuyer(): any {
    return this.buyer;
  }

  /**
   * @returns {any}
   */
  getPayment(): any {
    return this.payment;
  }

  /**
   * @returns {any}
   */
  getInstrument(): any {
    return this.instrument;
  }

  /**
   * @returns {any}
   */
  getAdditional(): any {
    return this.additional;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      locale: this.getLocale(),
      payer: this.getPayer() ? this.getPayer().toObject() : null,
      buyer: this.getBuyer() ? this.getBuyer().toObject() : null,
      payment: this.getPayment() ? this.getPayment().toObject() : null,
      instrument: this.getInstrument() ? this.getInstrument().toObject() : null,
      additional: this.getAdditional(),
    });
  }
}
