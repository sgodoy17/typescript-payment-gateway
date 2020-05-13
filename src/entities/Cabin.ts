import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Cabin extends Entity {
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

    this.code = data.hasOwnProperty("code") ? data.code : null;
    this.name = data.hasOwnProperty("name") ? data.name : null;
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
      code: this.getCode(),
      name: this.getName(),
    });
  }
}
