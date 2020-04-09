import { Entity } from "../contracts/Entity";

/**
 * Class GDS.
 */
export class GDS extends Entity {
  protected code: string;
  protected session: string;
  protected pnr: string;
  protected airline: string;

  /**
   * GDS constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
    super();

    this.code = data.hasOwnProperty("code") ? data.code : null;
    this.session = data.hasOwnProperty("session") ? data.session : null;
    this.pnr = data.hasOwnProperty("pnr") ? data.pnr : null;
    this.airline = data.hasOwnProperty("airline") ? data.airline : null;
  }

  /**
   * @return string
   */
  getCode(): string {
    return this.code;
  }

  /**
   * @return string
   */
  getSession(): string {
    return this.session;
  }

  /**
   * @return string
   */
  getPnr(): string {
    return this.pnr;
  }

  /**
   * @return string
   */
  getAirline(): string {
    return this.airline;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      code: this.getCode(),
      session: this.getSession(),
      pnr: this.getPnr(),
      airline: this.getAirline(),
    };
  }
}
