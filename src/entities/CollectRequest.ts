import { Entity } from "../contracts/Entity";
import { Person } from "./Person";
import { Payment } from "./Payment";

/**
 * Class CollectRequest.
 */
export class CollectRequest extends Entity {
  /**
   * @var {string}
   */
  protected locale: string = "es_CO";

  /**
   * @var {any}
   */
  protected payer: any;

  /**
   * @var {any}
   */
  protected buyer: any;

  /**
   * @var {any}
   */
  protected payment: any;

  /**
   * @var {any}
   */
  protected instrument: any;

  /**
   * @var {any}
   */
  protected additional: any;

  /**
   * CollectRequest constructor.
   *
   * @param {any} data
   */
  constructor(data: any = []) {
    super();

    this.locale = data.hasOwnProperty("locale") ? data.locale : null;
    this.payer = data.hasOwnProperty("payer") ? new Person(data.payer) : null;
    this.buyer = data.hasOwnProperty("buyer") ? new Person(data.buyer) : null;
    this.payment = data.hasOwnProperty("payment") ? new Payment(data.payment) : null;
    this.instrument = data.hasOwnProperty("instrument")
      ? data.instrument
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
      payer: this.getPayer().toObject(),
      buyer: this.getBuyer(),
      payment: this.getPayment(),
      instrument: this.getInstrument(),
      additional: this.getAdditional(),
    });
  }
}
