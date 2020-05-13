import { Entity } from "../contracts/Entity";

/**
 * @class
 * @extends {Entity}
 */
export class PQPassenger extends Entity {
  protected nameId: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.nameId = data.hasOwnProperty("name_id") ? data.name_id : null;
  }

  /**
   * @returns {string}
   */
  getNameId(): string {
    return this.nameId;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      nameId: this.getNameId(),
    });
  }
}
