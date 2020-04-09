import { Entity } from "../contracts/Entity";
import { HasFields } from "../interfaces/HasFields";

/**
 * Class EntityWithNameValuePair.
 */
export abstract class EntityWithNameValuePair extends Entity
  implements HasFields {
  protected fields: any;

  /**
   * EntityWithNameValuePair constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
    super();
  }

  /**
   * @return any
   */
  getFields(): any {
    return this.fields;
  }

  /**
   * @return any
   */
  fieldsToObject(): any {
    return {};
  }
}
