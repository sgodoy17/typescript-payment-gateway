/**
 * @class
 */
export class PQPassenger {
  /**
   * @type {string}
   */
  public nameId: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.nameId = data.nameId;
  }

  /**
   * @param {any} data
   * @returns {PQPassenger}
   */
  static fromResponse(data: any): PQPassenger {
    return new this({
      nameId: data.name_id,
    });
  }
}
