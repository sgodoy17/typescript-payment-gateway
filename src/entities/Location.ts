import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class Location extends Entity {
  /**
   * @type {string}
   */
  protected airport: string;

  /**
   * @type {string}
   */
  protected datetime: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.airport = data.hasOwnProperty("airport") ? data.airport : null;
    this.datetime = data.hasOwnProperty("datetime") ? data.datetime : null;
  }

  /**
   * @returns {string}
   */
  getAirport(): string {
    return this.airport;
  }

  /**
   * @returns {string}
   */
  getDatetime(): string {
    return this.datetime;
  }

  /**
   * @return {any}
   */
  toObject(): any {
    return this.arrayFilter({
      airport: this.getAirport(),
      datetime: this.getDatetime(),
    });
  }
}
