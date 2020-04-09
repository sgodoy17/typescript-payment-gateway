/**
 * Class PersonValidator.
 */
export class PersonValidator {
  /**
   * @param {string} phone String to be normalized.
   * @returns {string} Normalized string.
   */
  public static normalizePhone(phone: string): string {
    return phone.replace("+57", "");
  }
}
