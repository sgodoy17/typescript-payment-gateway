import { Entity } from "../contracts/Entity";

/**
 * Class Address.
 */
export class Address extends Entity {
  protected street: string;
  protected city: string;
  protected state: string;
  protected postalCode: string;
  protected country: string;
  protected phone: string;

  /**
   * Address constructor.
   *
   * @param data
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
   * @return string
   */
  getStreet(): string {
    return this.street;
  }

  /**
   * @return string
   */
  getCity(): string {
    return this.city;
  }

  /**
   * @return string
   */
  getState(): string {
    return this.state;
  }

  /**
   * @return string
   */
  getPostalCode(): string {
    return this.postalCode;
  }

  /**
   * @return string
   */
  getCountry(): string {
    return this.country;
  }

  /**
   * @return string
   */
  getPhone(): string {
    return this.phone;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      street: this.getStreet(),
      city: this.getCity(),
      state: this.getState(),
      postalCode: this.getPostalCode(),
      country: this.getCountry(),
      phone: this.getPhone(),
    };
  }
}
