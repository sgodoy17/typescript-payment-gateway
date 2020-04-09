/**
 * Class Entity.
 */
export abstract class Entity {
  /**
   * @return any
   */
  abstract toObject(): any;

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
