import { Entity } from "../contracts/Entity";

/**
 * Class Credit.
 */
export class Credit extends Entity {
  protected code: string;
  protected type: string;
  protected groupCode: string;
  protected installment: number;

  /**
   * Credit constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
    super();

    this.code = data.hasOwnProperty("code") ? data.code : null;
    this.type = data.hasOwnProperty("type") ? data.type : null;
    this.groupCode = data.hasOwnProperty("groupCode") ? data.groupCode : null;
    this.installment = data.hasOwnProperty("installment")
      ? data.installment
      : null;
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
  getType(): string {
    return this.type;
  }

  /**
   * @return string
   */
  getGroupCode(): string {
    return this.groupCode;
  }

  /**
   * @return string
   */
  getInstallment(): number {
    return this.installment;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      code: this.getCode(),
      type: this.getType(),
      groupCode: this.getGroupCode(),
      installment: this.getInstallment(),
    };
  }
}
