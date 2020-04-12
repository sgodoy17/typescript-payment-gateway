import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class GDS extends Entity {
  /**
   * @type {string}
   */
  protected code: string;

  /**
   * @type {string}
   */
  protected session: string;

  /**
   * @type {string}
   */
  protected pnr: string;

  /**
   * @type {string}
   */
  protected airline: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.code = data.hasOwnProperty("code") ? data.code : null;
    this.session = data.hasOwnProperty("session") ? data.session : null;
    this.pnr = data.hasOwnProperty("pnr") ? data.pnr : null;
    this.airline = data.hasOwnProperty("airline") ? data.airline : null;
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
  getSession(): string {
    return this.session;
  }

  /**
   * @returns {string}
   */
  getPnr(): string {
    return this.pnr;
  }

  /**
   * @returns {string}
   */
  getAirline(): string {
    return this.airline;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      code: this.getCode(),
      session: this.getSession(),
      pnr: this.getPnr(),
      airline: this.getAirline(),
    });
  }
}
