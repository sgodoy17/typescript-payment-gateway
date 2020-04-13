/**
 * @class
 */
export class CustomSha256 {
  /**
   * @type {number}
   */
  character_size: number = 8;

  /**
   * @type {number}
   */
  hex_case: number = 0;

  /**
   * @param {string} string
   * @param {boolean} type
   * @returns {string}
   */
  sha256(string: string, type: boolean = true): string {
    string = this.utf8Encode(string);

    if (type) {
      return this.binaryToBase64(
        this.coreSha256(
          this.stringToBinary(string),
          string.length * this.character_size
        )
      );
    } else {
      return this.binaryToHex(
        this.coreSha256(
          this.stringToBinary(string),
          string.length * this.character_size
        )
      );
    }
  }

  /**
   * @param {any} x
   * @param {any} y
   * @returns {number}
   */
  safeAdd(x: any, y: any): number {
    let lsw: number = (x & 0xffff) + (y & 0xffff);
    let msw: number = (x >> 16) + (y >> 16) + (lsw >> 16);

    return (msw << 16) | (lsw & 0xffff);
  }

  /**
   * @param {any} X
   * @param {any} n
   * @returns {number}
   */
  S(X: any, n: any): number {
    return (X >>> n) | (X << (32 - n));
  }

  /**
   * @param {any} X
   * @param {any} n
   * @returns {number}
   */
  R(X: any, n: any): number {
    return X >>> n;
  }

  /**
   * @param {any} x
   * @param {any} y
   * @param {any} z
   * @returns {number}
   */
  Ch(x: any, y: any, z: any): number {
    return (x & y) ^ (~x & z);
  }

  /**
   * @param {any} x
   * @param {any} y
   * @param {any} z
   * @returns {number}
   */
  Maj(x: any, y: any, z: any): number {
    return (x & y) ^ (x & z) ^ (y & z);
  }

  /**
   * @param {any} x
   * @returns {number}
   */
  Sigma0256(x: any): number {
    return this.S(x, 2) ^ this.S(x, 13) ^ this.S(x, 22);
  }

  /**
   * @param {any} x
   * @returns {number}
   */
  Sigma1256(x: any): number {
    return this.S(x, 6) ^ this.S(x, 11) ^ this.S(x, 25);
  }

  /**
   * @param {any} x
   * @returns {number}
   */
  Gamma0256(x: any): number {
    return this.S(x, 7) ^ this.S(x, 18) ^ this.R(x, 3);
  }

  /**
   * @param {any} x
   * @returns {number}
   */
  Gamma1256(x: any): number {
    return this.S(x, 17) ^ this.S(x, 19) ^ this.R(x, 10);
  }

  /**
   * @param {any} m
   * @param {any} l
   * @returns {Array<any>}
   */
  coreSha256(m: any, l: any): Array<any> {
    let K: Array<Object> = new Array(
      0x428a2f98,
      0x71374491,
      0xb5c0fbcf,
      0xe9b5dba5,
      0x3956c25b,
      0x59f111f1,
      0x923f82a4,
      0xab1c5ed5,
      0xd807aa98,
      0x12835b01,
      0x243185be,
      0x550c7dc3,
      0x72be5d74,
      0x80deb1fe,
      0x9bdc06a7,
      0xc19bf174,
      0xe49b69c1,
      0xefbe4786,
      0xfc19dc6,
      0x240ca1cc,
      0x2de92c6f,
      0x4a7484aa,
      0x5cb0a9dc,
      0x76f988da,
      0x983e5152,
      0xa831c66d,
      0xb00327c8,
      0xbf597fc7,
      0xc6e00bf3,
      0xd5a79147,
      0x6ca6351,
      0x14292967,
      0x27b70a85,
      0x2e1b2138,
      0x4d2c6dfc,
      0x53380d13,
      0x650a7354,
      0x766a0abb,
      0x81c2c92e,
      0x92722c85,
      0xa2bfe8a1,
      0xa81a664b,
      0xc24b8b70,
      0xc76c51a3,
      0xd192e819,
      0xd6990624,
      0xf40e3585,
      0x106aa070,
      0x19a4c116,
      0x1e376c08,
      0x2748774c,
      0x34b0bcb5,
      0x391c0cb3,
      0x4ed8aa4a,
      0x5b9cca4f,
      0x682e6ff3,
      0x748f82ee,
      0x78a5636f,
      0x84c87814,
      0x8cc70208,
      0x90befffa,
      0xa4506ceb,
      0xbef9a3f7,
      0xc67178f2
    );

    let HASH: Array<Object> = new Array(
      0x6a09e667,
      0xbb67ae85,
      0x3c6ef372,
      0xa54ff53a,
      0x510e527f,
      0x9b05688c,
      0x1f83d9ab,
      0x5be0cd19
    );

    let W: Array<Object> = new Array(64);
    let a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any;
    let T1: any, T2: any;

    m[l >> 5] |= 0x80 << (24 - (l % 32));
    m[(((l + 64) >> 9) << 4) + 15] = l;

    for (let i: number = 0; i < m.length; i += 16) {
      a = HASH[0];
      b = HASH[1];
      c = HASH[2];
      d = HASH[3];
      e = HASH[4];
      f = HASH[5];
      g = HASH[6];
      h = HASH[7];

      for (let j: number = 0; j < 64; j++) {
        if (j < 16) {
          W[j] = m[j + i];
        } else {
          W[j] = this.safeAdd(
            this.safeAdd(
              this.safeAdd(this.Gamma1256(W[j - 2]), W[j - 7]),
              this.Gamma0256(W[j - 15])
            ),
            W[j - 16]
          );
        }

        T1 = this.safeAdd(
          this.safeAdd(
            this.safeAdd(this.safeAdd(h, this.Sigma1256(e)), this.Ch(e, f, g)),
            K[j]
          ),
          W[j]
        );

        T2 = this.safeAdd(this.Sigma0256(a), this.Maj(a, b, c));

        h = g;
        g = f;
        f = e;
        e = this.safeAdd(d, T1);
        d = c;
        c = b;
        b = a;
        a = this.safeAdd(T1, T2);
      }

      HASH[0] = this.safeAdd(a, HASH[0]);
      HASH[1] = this.safeAdd(b, HASH[1]);
      HASH[2] = this.safeAdd(c, HASH[2]);
      HASH[3] = this.safeAdd(d, HASH[3]);
      HASH[4] = this.safeAdd(e, HASH[4]);
      HASH[5] = this.safeAdd(f, HASH[5]);
      HASH[6] = this.safeAdd(g, HASH[6]);
      HASH[7] = this.safeAdd(h, HASH[7]);
    }

    return HASH;
  }

  /**
   * @param {any} string
   * @returns {number[]}
   */
  stringToBinary(string: any): number[] {
    let bin: Array<number> = [];
    let mask: number = (1 << this.character_size) - 1;

    for (
      let i: number = 0;
      i < string.length * this.character_size;
      i += this.character_size
    ) {
      bin[i >> 5] |=
        (string.charCodeAt(i / this.character_size) & mask) << (24 - (i % 32));
    }

    return bin;
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

  /**
   * @param {Array<number>} binArray
   * @returns {string}
   */
  binaryToHex(binArray: Array<number>): string {
    var hex_tab = this.hex_case ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";

    for (var i = 0; i < binArray.length * 4; i++) {
      str +=
        hex_tab.charAt((binArray[i >> 2] >> ((3 - (i % 4)) * 8 + 4)) & 0xf) +
        hex_tab.charAt((binArray[i >> 2] >> ((3 - (i % 4)) * 8)) & 0xf);
    }

    return str;
  }

  /**
   * @param {Array<any>} binArray
   * @returns {string}
   */
  binaryToBase64(binArray: Array<any>): string {
    var sigBytes: number = 32;
    var map: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    var base64Chars: Array<any> = [];

    for (let i: number = 0; i < sigBytes; i += 3) {
      var byte1: number = (binArray[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      var byte2: number =
        (binArray[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
      var byte3: number =
        (binArray[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
      var triplet: number = (byte1 << 16) | (byte2 << 8) | byte3;

      for (let j: number = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
        base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
      }
    }

    var paddingChar: string = map.charAt(64);

    if (paddingChar) {
      while (base64Chars.length % 4) {
        base64Chars.push(paddingChar);
      }
    }

    return base64Chars.join("");
  }
}
