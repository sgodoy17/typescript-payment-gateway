/**
 * @class
 */
export class Airline {
  /**
   * @type {string}
   */
  public code: string;

  /**
   * @type {string}
   */
  public name: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.code = data.code;
    this.name = data.name;
  }
}
