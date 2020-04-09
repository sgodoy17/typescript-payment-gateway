import { Entity } from "../contracts/Entity";

/**
 * Class Bank.
 */
export class Bank extends Entity {
  public static readonly INT_PERSON: number = 0;
  public static readonly INT_BUSINESS: number = 1;

  protected interface: number = 0;
  protected code: string;
  protected name: string;

  /**
   * Bank constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
    super();

    this.interface = data.hasOwnProperty("interface") ? data.interface : null;
    this.code = data.hasOwnProperty("code") ? data.code : null;
    this.name = data.hasOwnProperty("name") ? data.name : null;
  }

  /**
   * @return number
   */
  getBankInterface(): number {
    return this.interface;
  }

  /**
   * @return string
   */
  getCode(): string {
    return this.code;
  }

  /**
   * @return string
   */
  getName(): string {
    return this.name;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      interface: this.getBankInterface(),
      code: this.getCode(),
      name: this.getName(),
    };
  }
}
