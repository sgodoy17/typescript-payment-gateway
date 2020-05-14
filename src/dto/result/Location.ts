/**
 * @class
 */
export class Location {
  /**
   * @type {string}
   */
  public airport: string;

  /**
   * @type {string}
   */
  public datetime: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.airport = data.airport;
    this.datetime = data.datetime;
  }

  /**
   * @param {any} data
   * @returns {Location}
   */
  static fromResponse(data: any): Location {
    return new this({
      airport: data.airport,
      datetime: data.datetime,
    });
  }
}
