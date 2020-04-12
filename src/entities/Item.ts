import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Item extends Entity {
  /**
   * @type {string}
   */
  protected sku: string;

  /**
   * @type {string}
   */
  protected name: string;

  /**
   * @type {string}
   */
  protected category: string;

  /**
   * @type {number}
   */
  protected qty: number;

  /**
   * @type {number}
   */
  protected price: number;

  /**
   * @type {number}
   */
  protected tax: number;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.sku = data.hasOwnProperty("sku") ? data.sku : null;
    this.name = data.hasOwnProperty("name") ? data.name : null;
    this.category = data.hasOwnProperty("category") ? data.category : null;
    this.qty = data.hasOwnProperty("qty") ? data.qty : null;
    this.price = data.hasOwnProperty("price") ? data.price : null;
    this.tax = data.hasOwnProperty("tax") ? data.tax : null;
  }

  /**
   * @returns {string}
   */
  getSku(): string {
    return this.sku;
  }

  /**
   * @returns {string}
   */
  getName(): string {
    return this.name;
  }

  /**
   * @returns {string}
   */
  getCategory(): string {
    return this.category;
  }

  /**
   * @returns {number}
   */
  getQty(): number {
    return this.qty;
  }

  /**
   * @returns {number}
   */
  getPrice(): number {
    return this.price;
  }

  /**
   * @returns {number}
   */
  getTax(): number {
    return this.tax;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      sku: this.getSku(),
      name: this.getName(),
      category: this.getCategory(),
      qty: this.getQty(),
      price: this.getPrice(),
      tax: this.getTax(),
    });
  }
}
