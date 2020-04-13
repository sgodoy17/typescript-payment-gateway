import { CustomCrypto } from "./CustomCrypto";

/**
 * @class
 */
export class Authentication {
  /**
   * @type {string}
   */
  private login: string;

  /**
   * @type {string}
   */
  private tranKey: string;

  /**
   * @type {any}
   */
  private auth: any;

  /**
   * @type {boolean}
   */
  private override: boolean = false;

  /**
   * @type {string}
   */
  private type: string = "full";

  /**
   * @type {any}
   */
  private additional: any;

  /**
   * @constructor
   * @param {any} config
   */
  constructor(config: any) {
    if (
      typeof config.login == "undefined" ||
      typeof config.tranKey == "undefined"
    ) {
      console.log("No login or tranKey provided on authentication.");

      throw new Error("No login or tranKey provided on authentication.");
    }

    this.login = config.login;
    this.tranKey = config.tranKey;

    if (typeof config.auth !== "undefined") {
      if (
        typeof config.auth.seed == "undefined" ||
        typeof config.auth.seed == "undefined"
      ) {
        console.log("Bad definition for the override.");

        throw new Error("Bad definition for the override.");
      }

      this.auth = config.auth;
      this.override = true;
    }

    if (typeof config.auth_type !== "undefined") {
      this.type = config.auth_type;
    }

    if (typeof config.auth_additional !== "undefined") {
      this.additional = config.auth_additional;
    }

    if (typeof config.algorithm !== "undefined") {
      this.additional = config.algorithm;
    }

    this.generate();
  }

  /**
   * @returns {string}
   */
  getSeed(): string {
    if (this.auth) {
      return this.auth.seed;
    }

    return new Date().toISOString();
  }

  /**
   * @param {boolean} encoded
   * @returns {string}
   */
  getNonce(encoded: boolean = true): string {
    let nonce: any;

    if (this.auth) {
      nonce = this.auth.nonce;
    } else {
      nonce = Math.random()
        .toString(36)
        .substring(7);
    }

    if (encoded) {
      return btoa(nonce);
    }

    return nonce;
  }

  /**
   * @returns {string}
   */
  getLogin(): string {
    return this.login;
  }

  /**
   * @returns {string}
   */
  getTranKey(): string {
    return this.tranKey;
  }

  /**
   * @returns {any}
   */
  getAdditional(): any {
    return this.additional;
  }

  /**
   * @param {any} additional
   * @returns {void}
   */
  setAdditional(additional: any): void {
    this.additional = additional;
  }

  /**
   * @param {boolean} encoded
   * @returns {string}
   */
  digest(encoded: boolean = true): string {
    let digest: string;
    let crypto = new CustomCrypto();

    if (this.type == "full") {
      digest = crypto.hash("sha256", this.getNonce(false) + this.getSeed() + this.getTranKey());

      encoded = false;
    } else {

      digest = crypto.hash("sha256", this.getSeed() + this.getTranKey(), false);
    }

    if (encoded) {
      return btoa(digest);
    }

    return digest;
  }

  /**
   * @returns {void}
   */
  generate(): void {
    if (!this.override) {
      this.auth = {
        seed: this.getSeed(),
        nonce: this.getNonce()
      };
    }
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return {
      login: this.getLogin(),
      tranKey: this.digest(),
      nonce: this.getNonce(),
      seed: this.getSeed(),
      additional: this.getAdditional()
    };
  }
}
