import { PassengerGroup } from "./PassengerGroup";

/**
 * @class
 */
export class PassengerGroupCollection {
  /**
   * @type {Array<PassengerGroup>}
   */
  protected collection: Array<PassengerGroup>;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  /**
   * @param {string} code
   * @returns {PassengerGroup}
   */
  getByAirline(code: string): PassengerGroup {
    let result: any = [];

    this.collection.forEach((item: any) => {
      if (item.getAirlineCode() === code) {
        result = item;
      }
    });

    return result;
  }

  /**
   *
   * @param {string} uid
   * @returns {PassengerGroup | null}
   */
  getByUid(uid: string): PassengerGroup | null {
    this.collection.forEach((item: any) => {
      if (item.getPassengerUids().includes(uid)) {
        return item;
      }
    });

    return null;
  }
}
