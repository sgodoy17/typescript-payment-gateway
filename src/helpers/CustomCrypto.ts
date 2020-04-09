import { CustomSha1 } from "./CustomSha1";
import { CustomSha256 } from "./CustomSha256";

/**
 * Class CustomCrypto.
 */
export class CustomCrypto {
  /**
   * @param type
   * @param text
   * @param encoded
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
