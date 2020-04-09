import { Entity } from "../contracts/Entity";
import { PersonValidator } from "../validators/PersonValidator";

/**
 * Class Address.
 */
export class Address extends Entity {
  /**
   * @var {string}
   */
  protected street: string;

  /**
   * @var {string}
   */
  protected city: string;

  /**
   * @var {string}
   */
  protected state: string;

  /**
   * @var {string}
   */
  protected postalCode: string;

  /**
   * @var {string}
   */
  protected country: string;

  /**
   * @var {any}
   */
  protected phone: any;

  /**
   * Address constructor.
   *
   * @param {any} data
   */
  constructor(data: any = []) {
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
    return this.phone !== null
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
