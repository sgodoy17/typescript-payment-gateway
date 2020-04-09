/**
 * Class BaseValidator.
 */
export abstract class BaseValidator {
  /**
   * @param entity
   * @param fields
   * @param silent
   */
  abstract isValid(entity: Object, fields: any[], silent: boolean): boolean;
}
