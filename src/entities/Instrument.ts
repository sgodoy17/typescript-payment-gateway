import { Bank } from "./Bank";
import { Card } from "./Card";
import { Credit } from "./Credit";
import { Entity } from "../contracts/Entity";
import { Token } from "./Token";

/**
 * @class
 * @extends {Entity}
 */
export class Instrument extends Entity {
  /**
   * @type {any}
   */
  protected bank: any;

  /**
   * @type {any}
   */
  protected card: any;

  /**
   * @type {any}
   */
  protected token: any;

  /**
   * @type {any}
   */
  protected credit: any;

  /**
   * @type {string}
   */
  protected pin: string;

  /**
   * @type {string}
   */
  protected password: string;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    super();

    this.bank = data.hasOwnProperty("bank") ? new Bank(data.bank) : null;
    this.card = data.hasOwnProperty("card") ? new Card(data.card) : null;
    this.token = data.hasOwnProperty("token") ? new Token(data.token) : null;
    this.credit = data.hasOwnProperty("credit") ? new Credit(data.credit) : null;
    this.pin = data.hasOwnProperty("pin") ? data.pin : null;
    this.password = data.hasOwnProperty("password") ? data.password : null;
  }

  /**
   * @returns {any}
   */
  getBank(): any {
    return this.bank;
  }

  /**
   * @returns {any}
   */
  getCard(): any {
    return this.card;
  }

  /**
   * @returns {any}
   */
  getToken(): any {
    return this.token;
  }

  /**
   * @returns {any}
   */
  getCredit(): any {
    return this.credit;
  }

  /**
   * @returns {string}
   */
  getPin(): string {
    return this.pin;
  }

  /**
   * @returns {string}
   */
  getPassword(): string {
    return this.password;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      bank: this.getBank() ? this.getBank().toObject() : null,
      card: this.getCard() ? this.getCard().toObject() : null,
      credit: this.getCredit() ? this.getCredit().toObject() : null,
      token: this.getToken() ? this.getToken().toObject() : null,
      pin: this.getPin(),
      password: this.getPassword(),
    });
  }
}
