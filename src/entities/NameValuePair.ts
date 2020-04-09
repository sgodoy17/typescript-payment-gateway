import { Entity } from "../contracts/Entity";

/**
 * Class NameValuePair.
 */
export class NameValuePair extends Entity {
  protected keyword: string;
  protected value: string;
  protected displayOn: string = "none";

  /**
   * NameValuePair constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
    super();

    this.keyword = data.hasOwnProperty("keyword") ? data.keyword : null;
    this.value = data.hasOwnProperty("value") ? data.value : null;

    if (data.hasOwnProperty("displayOn")) {
      this.displayOn = data.displayOn;
    }
  }

  /**
   * @return string
   */
  getKeyword(): string {
    return this.keyword;
  }

  /**
   * @return string
   */
  getValue(): string {
    return this.value;
  }

  /**
   * @return string
   */
  getDisplayOn(): string {
    return this.displayOn;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      keyword: this.getKeyword(),
      value: this.getValue(),
      displayOn: this.getDisplayOn(),
    };
  }
}
