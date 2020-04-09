import { CustomCrypto } from "./CustomCrypto";

/**
 * Class Authentication.
 */
export class Authentication {
  private login: string;
  private tranKey: string;
  private auth: any;
  private override: boolean = false;
  private type: string = "full";
  private additional: any;

  /**
   * Authentication constructor.
   *
   * @param config
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
   * @return string
   */
  getSeed(): string {
    if (this.auth) {
      return this.auth.seed;
    }

    return new Date().toISOString();
  }

  /**
   * @param encoded
   * @return string
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
   * @return string
   */
  getLogin(): string {
    return this.login;
  }

  /**
   * @return string
   */
  getTranKey(): string {
    return this.tranKey;
  }

  /**
   * @return any
   */
  getAdditional(): any {
    return this.additional;
  }

  /**
   * @param additional
   * @return this
   */
  setAdditional(additional: any): this {
    this.additional = additional;

    return this;
  }

  /**
   * @param encoded
   * @return string
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
   * @return this
   */
  generate(): this {
    if (!this.override) {
      this.auth = {
        seed: this.getSeed(),
        nonce: this.getNonce()
      };
    }

    return this;
  }

  /**
   * @return any
   */
  asObject(): any {
    return {
      login: this.getLogin(),
      tranKey: this.digest(),
      nonce: this.getNonce(),
      seed: this.getSeed(),
      additional: this.getAdditional()
    };
  }
}
