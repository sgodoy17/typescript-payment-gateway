import { Entity } from "../contracts/Entity";
import { Credit } from "./Credit";
import { Bank } from "./Bank";
import { Card } from "./Card";
import { Token } from "./Token";

/**
 * Class Instrument.
 */
export class Instrument extends Entity {
  protected bank: any;
  protected card: any;
  protected token: any;
  protected credit: any;
  protected pin: any;
  protected password: any;

  /**
   * Instrument constructor.
   *
   * @param data
   */
  constructor(data: any = []) {
    super();

    if (data.hasOwnProperty("bank")) {
      this.bank = new Bank(data.bank);
    }

    if (data.hasOwnProperty("card")) {
      this.card = new Card(data.card);
    }

    if (data.hasOwnProperty("token")) {
      this.token = new Token(data.token);
    }

    if (data.hasOwnProperty("credit")) {
      this.credit = new Credit(data.credit);
    }

    if (data.hasOwnProperty("pin")) {
      this.pin = data.pin;
    }

    if (data.hasOwnProperty("password")) {
      this.password = data.password;
    }
  }

  /**
   * @return any
   */
  getBank(): any {
    return this.bank;
  }

  /**
   * @return any
   */
  getCard(): any {
    return this.card;
  }

  /**
   * @return any
   */
  getToken(): any {
    return this.token;
  }

  /**
   * @return any
   */
  getCredit(): any {
    return this.credit;
  }

  /**
   * @return string
   */
  getPin(): string {
    return this.pin;
  }

  /**
   * @return string
   */
  getPassword(): string {
    return this.password;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      bank: typeof this.getBank() ? this.getBank().toObject() : null,
      card: typeof this.getCard() ? this.getCard().toObject() : null,
      credit: typeof this.getCredit() ? this.getCredit().toObject() : null,
      token: typeof this.getToken() ? this.getToken().toObject() : null,
      pin: this.getPin(),
      password: this.getPassword(),
    };
  }
}
