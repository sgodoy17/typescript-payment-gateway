import { Amount } from "./Amount";
import { Entity } from "../contracts/Entity";
import { Person } from "./Person";
import { Recurring } from "./Recurring";
import { Item } from "./Item";
import { GDS } from "./GDS";

/**
 * @class
 * @extends {Entity}
 */
export class Payment extends Entity {
  /**
   * @type {string}
   */
  protected reference: string;

  /**
   * @type {any}
   */
  protected description: string;

  /**
   * @type {any}
   */
  protected amount: any;

  /**
   * @type {boolean}
   */
  protected allowPartial: boolean = false;

  /**
   * @type {any}
   */
  protected shipping: any;

  /**
   * @type {any}
   */
  protected items: any;

  /**
   * @type {any}
   */
  protected recurring: any;

  /**
   * @type {boolean}
   */
  protected subscribe: boolean = false;

  /**
   * @type string
   */
  protected agreement: string;

  /**
   * @type {string}
   */
  protected agreementType: string;

  /**
   * @type {any}
   */
  protected gds: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
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
    this.amount = data.hasOwnProperty("amount")
      ? new Amount(data.amount)
      : null;
    this.recurring = data.hasOwnProperty("recurring")
      ? new Recurring(data.recurring)
      : null;
    this.shipping = data.hasOwnProperty("shipping")
      ? new Person(data.shipping)
      : null;
    this.items = data.hasOwnProperty("items")
      ? this.setItems(data.items)
      : null;
    this.gds = data.hasOwnProperty("gds") ? new GDS(data.gds) : null;
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
   * @param {any} items
   * @returns {any}
   */
  setItems(items: any): any {
    if (typeof items.item != "undefined") {
      items = items.item;
    }

    let result: any = [];

    items.forEach((item: any) => {
      if (item instanceof Object) {
        item = new Item(item);
      }

      result.push(item);
    });

    return result;
  }

  /**
   * @returns {any}
   */
  itemsToArray(): any {
    if (this.getItems()) {
      let items: any = [];

      this.getItems().forEach((item: any) => {
        items.push(item instanceof Item ? item.toObject() : null);
      });

      return items;
    }

    return null;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      reference: this.getReference(),
      description: this.getDescription(),
      amount: this.getAmount() ? this.getAmount().toObject() : null,
      allowPartial: this.getAllowPartial(),
      shipping: this.getShipping() ? this.getShipping().toObject() : null,
      items: this.itemsToArray(),
      recurring: this.getRecurring() ? this.getRecurring().toObject() : null,
      subscribe: this.getSubscribe(),
      additional: null, // This is in EntityWithNameValuePair
      agreement: this.getAgreement(),
      agreementType: this.getAgreementType(),
      gds: this.getGds() ? this.getGds().toObject() : null,
    });
  }
}
