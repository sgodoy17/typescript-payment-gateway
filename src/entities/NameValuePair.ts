import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class NameValuePair extends Entity {
  /**
   * @type {string}
   */
  protected keyword: string;

  /**
   * @type {string}
   */
  protected value: string;

  /**
   * @type {string}
   */
  protected displayOn: string = "none";

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.keyword = data.hasOwnProperty("keyword") ? data.keyword : null;
    this.value = data.hasOwnProperty("value") ? data.value : null;
    this.displayOn = data.hasOwnProperty("displayOn") ? data.displayOn : null;
  }

  /**
   * @returns {string}
   */
  getKeyword(): string {
    return this.keyword;
  }

  /**
   * @returns {string}
   */
  getValue(): string {
    return this.value;
  }

  /**
   * @returns {string}
   */
  getDisplayOn(): string {
    return this.displayOn;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      keyword: this.getKeyword(),
      value: this.getValue(),
      displayOn: this.getDisplayOn(),
    });
  }
}
