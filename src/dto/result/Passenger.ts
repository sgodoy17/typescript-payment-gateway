/**
 * @class
 */
export class Passenger {
  /**
   * @type {string}
   */
  public firstName: string;

  /**
   * @type {string}
   */
  public lastName: string;

  /**
   * @type {string}
   */
  public nameId: string;

  /**
   * @type {string}
   */
  public type: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.nameId = data.nameId;
    this.type = data.type;
  }

  /**
   * @param {any} data
   * @returns {Passenger}
   */
  static fromResponse(data: any): Passenger {
    return new this({
      firstName: data.first_name,
      lastName: data.last_name,
      nameId: data.name_id,
      type: data.type,
    });
  }
}
