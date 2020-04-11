import { Entity } from "../contracts/Entity";
import { PersonValidator } from "../validators/PersonValidator";

/**
 * @class
 * @extends {Entity}
 */
export class Address extends Entity {
  /**
   * @type {string}
   */
  protected street: string;

  /**
   * @type {string}
   */
  protected city: string;

  /**
   * @type {string}
   */
  protected state: string;

  /**
   * @type {string}
   */
  protected postalCode: string;

  /**
   * @type {string}
   */
  protected country: string;

  /**
   * @type {any}
   */
  protected phone: any;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.street = data.hasOwnProperty("street") ? data.street : null;
    this.city = data.hasOwnProperty("city") ? data.city : null;
    this.state = data.hasOwnProperty("state") ? data.state : null;
    this.postalCode = data.hasOwnProperty("postalCode")
      ? data.postalCode
      : null;
    this.country = data.hasOwnProperty("country") ? data.country : null;
    this.phone = data.hasOwnProperty("phone") ? data.phone : null;
  }

  /**
   * @returns {string}
   */
  getStreet(): string {
    return this.street;
  }

  /**
   * @returns {string}
   */
  getCity(): string {
    return this.city;
  }

  /**
   * @returns {string}
   */
  getState(): string {
    return this.state;
  }

  /**
   * @returns {string}
   */
  getPostalCode(): string {
    return this.postalCode;
  }

  /**
   * @returns {string}
   */
  getCountry(): string {
    return this.country;
  }

  /**
   * @returns {any}
   */
  getPhone(): any {
    return this.phone != null
      ? PersonValidator.normalizePhone(this.phone)
      : null;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      street: this.getStreet(),
      city: this.getCity(),
      state: this.getState(),
      postalCode: this.getPostalCode(),
      country: this.getCountry(),
      phone: this.getPhone(),
    });
  }
}
