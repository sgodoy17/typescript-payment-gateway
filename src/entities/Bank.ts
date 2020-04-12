import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Bank extends Entity {
  public static readonly INT_PERSON: number = 0;
  public static readonly INT_BUSINESS: number = 1;

  /**
   * @type {number}
   */
  protected interface: number = 0;

  /**
   * @type {string}
   */
  protected code: string;

  /**
   * @type {string}
   */
  protected name: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.interface = data.hasOwnProperty("interface") ? data.interface : null;
    this.code = data.hasOwnProperty("code") ? data.code : null;
    this.name = data.hasOwnProperty("name") ? data.name : null;
  }

  /**
   * @returns {number}
   */
  getBankInterface(): number {
    return this.interface;
  }

  /**
   * @returns {string}
   */
  getCode(): string {
    return this.code;
  }

  /**
   * @returns {string}
   */
  getName(): string {
    return this.name;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      interface: this.getBankInterface(),
      code: this.getCode(),
      name: this.getName(),
    });
  }
}
