import { CustomSha1 } from "./CustomSha1";
import { CustomSha256 } from "./CustomSha256";

/**
 * @class
 */
export class CustomCrypto {
  /**
   * @param {string} type
   * @param {string} text
   * @param {boolean} encoded
   */
  hash(type: string, text: string, encoded: boolean = true): string {
    let crypto: any;

    switch (type) {
      case "sha1":
        crypto = new CustomSha1();
        text = crypto.sha1(text);
        break;
      case "sha256":
        crypto = new CustomSha256();
        text = crypto.sha256(text, encoded);
        break;
    }

    return text;
  }
}
