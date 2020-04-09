import { Entity } from "../contracts/Entity";
import { Bank } from "./Bank";
import { Card } from "./Card";
import { Token } from "./Token";

/**
 * Class Payment.
 */
export class Payment extends Entity {
  protected reference: any;
  protected description: any;
  protected amount: any;
  protected allowPartial: boolean = false;
  protected shipping: any;
  protected items: any;
  protected recurring: any;
  protected instrument: any;

  constructor(data: any = []) {
    super();
  }

  toObject() {
    return {};
  }
}
