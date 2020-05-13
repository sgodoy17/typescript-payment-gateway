import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Passenger extends Entity {
  /**
   * @type {string}
   */
  protected firstName: string;

  /**
   * @type {string}
   */
  protected lastName: string;

  /**
   * @type {string}
   */
  protected nameId: string;

  /**
   * @type {string}
   */
  protected type: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.firstName = data.hasOwnProperty("first_name") ? data.first_name : null;
    this.lastName = data.hasOwnProperty("last_name") ? data.last_name : null;
    this.nameId = data.hasOwnProperty("name_id") ? data.name_id : null;
    this.type = data.hasOwnProperty("type") ? data.type : null;
  }

  /**
   * @returns {string}
   */
  getFirstName(): string {
    return this.firstName;
  }

  /**
   * @returns {string}
   */
  getLastName(): string {
    return this.lastName;
  }

  /**
   * @returns {string}
   */
  getNameId(): string {
    return this.nameId;
  }

  /**
   * @returns {string}
   */
  getType(): string {
    return this.type;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      nameId: this.getNameId(),
      type: this.getType(),
    });
  }
}
