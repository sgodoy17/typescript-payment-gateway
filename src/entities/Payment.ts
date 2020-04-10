import { Entity } from "../contracts/Entity";
import { Bank } from "./Bank";
import { Card } from "./Card";
import { Token } from "./Token";

/**
 * Class Payment.
 */
export class Payment extends Entity {
  /**
   * @var {string}
   */
  protected reference: string;

  /**
   * @var {any}
   */
  protected description: string;

  /**
   * @var {any}
   */
  protected amount: any;

  /**
   * @var {boolean}
   */
  protected allowPartial: boolean = false;

  /**
   * @var {any}
   */
  protected shipping: any;

  /**
   * @var {any}
   */
  protected items: any;

  /**
   * @var {any}
   */
  protected recurring: any;

  /**
   * @var {boolean}
   */
  protected subscribe: boolean = false;

  /**
   * @var string
   */
  protected agreement: string;

  /**
   * @var {string}
   */
  protected agreementType: string;

  /**
   * @var {any}
   */
  protected gds: any;

  /**
   * Payment constructor.
   *
   * @param {any} data
   */
  constructor(data: any = []) {
    super();

    this.reference = data.hasOwnProperty("reference") ? data.reference : null;
    this.description = data.hasOwnProperty("description")
      ? data.description
      : null;
    this.allowPartial = data.hasOwnProperty("allowPartial")
      ? data.allowPartial
      : null;
    this.subscribe = data.hasOwnProperty("subscribe") ? data.subscribe : null;
    this.agreement = data.hasOwnProperty("agreement") ? data.agreement : null;
    this.agreementType = data.hasOwnProperty("agreementType")
      ? data.agreementType
      : null;
    this.amount = data.hasOwnProperty("amount") ? data.amount : null;
    this.recurring = data.hasOwnProperty("recurring") ? data.recurring : null;
    this.shipping = data.hasOwnProperty("shipping") ? data.shipping : null;
    this.items = data.hasOwnProperty("items") ? data.items : null;
    this.gds = data.hasOwnProperty("gds") ? data.gds : null;
  }

  /**
   * @returns {string}
   */
  getReference(): string {
    return this.reference;
  }

  /**
   * @returns {string}
   */
  getDescription(): string {
    return this.description;
  }

  /**
   * @returns {boolean}
   */
  getAllowPartial(): boolean {
    return this.allowPartial;
  }

  /**
   * @returns {boolean}
   */
  getSubscribe(): boolean {
    return this.subscribe;
  }

  /**
   * @returns {string}
   */
  getAgreement(): string {
    return this.agreement;
  }

  /**
   * @returns {string}
   */
  getAgreementType(): string {
    return this.agreementType;
  }

  /**
   * @returns {any}
   */
  getAmount(): any {
    return this.amount;
  }

  /**
   * @returns {any}
   */
  getRecurring(): any {
    return this.recurring;
  }

  /**
   * @returns {any}
   */
  getShipping(): any {
    return this.shipping;
  }

  /**
   * @returns {any}
   */
  getItems(): any {
    return this.items;
  }

  /**
   * @returns {any}
   */
  getGds(): any {
    return this.gds;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      reference: this.getReference(),
      description: this.getDescription(),
      amount: this.getAmount(),
      allowPartial: this.getAllowPartial(),
      shipping: this.getShipping(),
      items: this.getItems(),
      recurring: this.getRecurring(),
      subscribe: this.getSubscribe(),
      additional: null, // This is in EntityWithNameValuePair
      agreement: this.getAgreement(),
      agreementType: this.getAgreementType(),
      gds: this.getGds(),
    });
  }
}
