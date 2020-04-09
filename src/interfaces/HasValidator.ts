import { BaseValidator } from "../contracts/BaseValidator";

/**
 * Interface HasValidator.
 */
export interface HasValidator {
  /**
   * @return BaseValidator
   */
  getValidator(): BaseValidator;

  /**
   * @return boolean
   */
  isValid(fields: any[], silent: boolean): boolean;

  /**
   * @param requiredFields
   * @return any[]
   */
  checkMissingFields(requiredFields: any[]): any[];
}
