import { HasValidator } from "../interfaces/HasValidator";
import { BaseValidator } from "./BaseValidator";
import { Person } from "../entities/Person";

/**
 * Class Entity.
 */
export abstract class Entity implements HasValidator {
  private validatorInstance: any;
  private validatorClass!: new () => BaseValidator;

  /**
   * @return any
   */
  abstract toObject(): any;

  /**
   * @param fields
   * @param silent
   * @return boolean
   */
  isValid(fields: any[], silent: boolean): boolean {
    return this.getValidator().isValid(this, fields, silent);
  }

  /**
   * @param requiredFields
   */
  checkMissingFields(requiredFields: any[]): any[] {
    throw new Error("Not supported yet.");
  }

  /**
   * @return any
   */
  getValidator(): BaseValidator {
    if (typeof this.validatorInstance !== undefined) {
      this.validatorInstance = new this.validatorClass();
    }

    return this.validatorInstance;
  }

  /**
   * @param {any} data
   * @returns {any} New filtered object.
   */
  arrayFilter(data: any): any {
    let values = [0, null, "", false, undefined];

    return Object.keys(data).reduce((filtered: any, key: any) => {
      if (!values.includes(data[key])) {
        filtered[key] = data[key];
      }

      return filtered;
    }, {});
  }
}
