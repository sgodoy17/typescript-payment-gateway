/**
 * @class
 */
export class CustomSha1 {
  /**
   * @param {string} string
   * @returns {string}
   */
  sha1(string: string): string {
    let blockStart: number;
    let i: number, j: number;
    let W: Array<any> = new Array(80);
    let H0: number = 0x67452301;
    let H1: number = 0xefcdab89;
    let H2: number = 0x98badcfe;
    let H3: number = 0x10325476;
    let H4: number = 0xc3d2e1f0;
    let A: number, B: number, C: number, D: number, E: number;
    let temp: number;

    string = this.utf8Encode(string);

    let msg_len: number = string.length;
    let word_array: Array<any> = new Array();

    for (i = 0; i < msg_len - 3; i += 4) {
      j =
        (string.charCodeAt(i) << 24) |
        (string.charCodeAt(i + 1) << 16) |
        (string.charCodeAt(i + 2) << 8) |
        string.charCodeAt(i + 3);
      word_array.push(j);
    }

    switch (msg_len % 4) {
      case 0:
        i = 0x080000000;
        break;
      case 1:
        i = (string.charCodeAt(msg_len - 1) << 24) | 0x0800000;
        break;
      case 2:
        i =
          (string.charCodeAt(msg_len - 2) << 24) |
          (string.charCodeAt(msg_len - 1) << 16) |
          0x08000;
        break;
      case 3:
        i =
          (string.charCodeAt(msg_len - 3) << 24) |
          (string.charCodeAt(msg_len - 2) << 16) |
          (string.charCodeAt(msg_len - 1) << 8) |
          0x80;
        break;
    }
    word_array.push(i);

    while (word_array.length % 16 != 14) {
      word_array.push(0);
    }

    word_array.push(msg_len >>> 29);
    word_array.push((msg_len << 3) & 0x0ffffffff);

    for (blockStart = 0; blockStart < word_array.length; blockStart += 16) {
      for (i = 0; i < 16; i++) {
        W[i] = word_array[blockStart + i];
      }

      for (i = 16; i <= 79; i++) {
        W[i] = this.rotateLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
      }

      A = H0;
      B = H1;
      C = H2;
      D = H3;
      E = H4;

      for (i = 0; i <= 19; i++) {
        temp =
          (this.rotateLeft(A, 5) +
            ((B & C) | (~B & D)) +
            E +
            W[i] +
            0x5a827999) &
          0x0ffffffff;
        E = D;
        D = C;
        C = this.rotateLeft(B, 30);
        B = A;
        A = temp;
      }

      for (i = 20; i <= 39; i++) {
        temp =
          (this.rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ed9eba1) &
          0x0ffffffff;
        E = D;
        D = C;
        C = this.rotateLeft(B, 30);
        B = A;
        A = temp;
      }

      for (i = 40; i <= 59; i++) {
        temp =
          (this.rotateLeft(A, 5) +
            ((B & C) | (B & D) | (C & D)) +
            E +
            W[i] +
            0x8f1bbcdc) &
          0x0ffffffff;
        E = D;
        D = C;
        C = this.rotateLeft(B, 30);
        B = A;
        A = temp;
      }

      for (i = 60; i <= 79; i++) {
        temp =
          (this.rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xca62c1d6) &
          0x0ffffffff;
        E = D;
        D = C;
        C = this.rotateLeft(B, 30);
        B = A;
        A = temp;
      }

      H0 = (H0 + A) & 0x0ffffffff;
      H1 = (H1 + B) & 0x0ffffffff;
      H2 = (H2 + C) & 0x0ffffffff;
      H3 = (H3 + D) & 0x0ffffffff;
      H4 = (H4 + E) & 0x0ffffffff;
    }

    var temporal =
      this.lsbHex(H0) +
      this.lsbHex(H1) +
      this.lsbHex(H2) +
      this.lsbHex(H3) +
      this.lsbHex(H4);

    return temporal.toLowerCase();
  }

  /**
   * @param {number} n
   * @param {number} s
   * @returns {number}
   */
  rotateLeft(n: number, s: number): number {
    let t4 = (n << s) | (n >>> (32 - s));

    return t4;
  }

  /**
   * @param {number} val
   * @returns {string}
   */
  lsbHex(val: number): string {
    let str: string = "";
    let i: number;
    let vh: number;
    let vl: number;

    for (i = 0; i <= 6; i += 2) {
      vh = (val >>> (i * 4 + 4)) & 0x0f;
      vl = (val >>> (i * 4)) & 0x0f;
      str += vh.toString(16) + vl.toString(16);
    }

    return str;
  }

  /**
   * @param {number} val
   * @returns {string}
   */
  cvtHex(val: number): string {
    let str: string = "";
    let i: number;
    let v: number;

    for (i = 7; i >= 0; i--) {
      v = (val >>> (i * 4)) & 0x0f;
      str += v.toString(16);
    }

    return str;
  }

  /**
   * @param {string} string
   * @returns {string}
   */
  utf8Encode(string: string): string {
    string = string.replace(/\r\n/g, "\n");
    let utfText: string = "";

    for (let n: number = 0; n < string.length; n++) {
      let c: number = string.charCodeAt(n);

      if (c < 128) {
        utfText += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utfText += String.fromCharCode((c >> 6) | 192);
        utfText += String.fromCharCode((c & 63) | 128);
      } else {
        utfText += String.fromCharCode((c >> 12) | 224);
        utfText += String.fromCharCode(((c >> 6) & 63) | 128);
        utfText += String.fromCharCode((c & 63) | 128);
      }
    }

    return utfText;
  }
}
