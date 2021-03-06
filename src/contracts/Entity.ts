/**
 * @class
 */
export abstract class Entity {
  /**
   * @returns {any}
   */
  abstract toObject(): any;

  /**
   * @param {any} data
   * @returns {any}
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
