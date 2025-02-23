export interface UsernoInfo {
  uno: string;
  value: string;
}

export class UnoHelper {
  /**
   *
   * {2:valid}+{4:type}+{8:seqno}
   * @param seqno max 8 digits numbers
   * @param seeds array
   * @return string
   */
  static buildUno(seqno: number, seeds: string[]): UsernoInfo {
    if (!/[\d]{1,8}/.test(seqno.toString()))
      throw new Error(`seqno [${seqno}] more than 8 length.`);

    const notMaches = seeds.filter((s) => !/[0-9]{2,4}/.test(s));
    if (notMaches?.length) {
      throw new Error(`Seeds [${notMaches.join(',')}] not 4 digits.`);
    }

    if (!seeds.length) {
      seeds.push('444');
    }

    const range = seeds.length;

    const idx = Math.floor(Math.random() * range);
    let seed = seeds[idx];
    seed = `0000${seed}`.slice(-4);

    const checkDigit = `00${parseInt(seed) % 17}`.slice(-2);

    const no = `00000000${seqno}`.slice(-8);
    const value = `${checkDigit}${seed}${no}`;
    const uno = Number(value).toString(36);

    return {
      uno,
      value,
    };
  }

  /**
   *
   * @param uno36 base36 string
   * @returns no with digits
   */
  static parseUno(uno36: string): string {
    if (!/[0-9a-z]{8,14}/.test(uno36))
      throw new Error(`uno [${uno36}] illegal.`);
    const no = parseInt(uno36, 36);
    return `000000${no}`.slice(-14);
  }

  /**
   * validate uno illegal
   * @param uno userno string or value
   * @returns boolean illegal uno
   */
  static validUno(uno: string): boolean {
    if (!/[0-9a-z]{9,14}/.test(uno)) return false;

    let unoValue = uno
    if(/[a-z]+/.test(uno)){
        unoValue =   UnoHelper.parseUno(uno)
    }else {
        unoValue =  `000000${uno}`.slice(-14);
    }
    const m = parseInt(unoValue.slice(0, 2));
    globalThis.console.log(m)
    const seed = parseInt(unoValue.slice(2, 6));
    globalThis.console.log(seed)

    return seed % 17 === m;
  }
}
