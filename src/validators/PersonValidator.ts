/**
 * @class
 */
export class PersonValidator {
  /**
   * @param {string} phone
   * @returns {string}
   */
  public static normalizePhone(phone: string): string {
    return phone.replace("+57", "");
  }
}
