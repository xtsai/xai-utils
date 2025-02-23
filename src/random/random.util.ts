export class RandomUtil {
  static shortId() {
    const prex1 = (Math.random() * Math.pow(36, 1)) | 0;
    const prex2 = (Math.random() * Math.pow(36, 1)) | 0;
    const prefix = prex1.toString(36).toUpperCase() + prex2.toString(36);
    const firstPart = (Math.random() * Math.pow(36, 5)) | 0;
    const secondPart = (Math.random() * Math.pow(36, 5)) | 0;
    const first = ('00000' + firstPart.toString(36)).slice(-5);
    const second = ('00000' + secondPart.toString(36)).slice(-5);
    return `${prefix}_${first}${second}`;
  }
  /**
   * random 5~6 length string
   * @returns state
   */
  static randomState(): string {
    const firstPart = (Math.random() * Math.pow(36, 4)) | 0;
    const secondPart = (Math.random() * Math.pow(36, 4)) | 0;

    let str = `${firstPart}0000`.slice(0, 4);
    str = str + `0000${secondPart}`.slice(-4);

    return Number(str).toString(36);
  }

  /**
   * Client
   * @param prefix xaim
   * @returns string
   */
  static clientUUID(prefix: string = 'xaim') {
    if (!prefix?.length) {
      const prex1 = (Math.random() * Math.pow(36, 1)) | 0;
      const prex2 = (Math.random() * Math.pow(36, 1)) | 0;
      prefix =
        prex1.toString(36).toUpperCase() + prex2.toString(36).toUpperCase();
    }

    const now = Date.now();
    const random = (Math.random() * Math.pow(36, 4)) | 0;
    const temp = `00000${random}`.slice(-4);
    const uuid = Number(`${now}${temp}`).toString(36);

    return `${prefix}_${uuid}`;
  }

  /**
   * url
   * @param prefix xbot
   * @returns string
   */
  static createChatid(prefix: string = 'xbot'): string {
    const random = (Math.random() * Math.pow(36, 2)) | 0;
    const id = Number(`${random}${Date.now()}`).toString(36);

    return prefix?.length ? `${prefix.toUpperCase()}_${id}` : id;
  }

  /**
   * random base time
   * @returns reqid string
   */
  static createReqid(prefix: string = 'xmob'): string {
    const v1 = (Math.random() * Math.pow(36, 3)) | 0;
    const v2 = (Math.random() * Math.pow(36, 3)) | 0;
    const suffix = Number(`${v1}${v2}`).toString(32);
    return `${prefix}.${Date.now().toString(32)}.${suffix}`;
  }

  /**
   *
   * @returns string
   */
  static createMsgid(): string {
    const prex1 = (Math.random() * Math.pow(36, 2)) | 0;
    const prex2 = (Math.random() * Math.pow(36, 2)) | 0;

    const prefix = Number(`${prex1}${prex2}`).toString(36);

    return `xmid.${prefix}${Date.now().toString(36)}`;
  }

  /**
   * base time random key part
   * @returns string
   */
  static genRandomCacheKey() {
    const prex1 = (Math.random() * Math.pow(36, 2)) | 0;
    const prex2 = (Math.random() * Math.pow(36, 2)) | 0;
    const prefix = prex1.toString(36).toUpperCase() + prex2.toString(36);

    return `${prefix}.${Date.now().toString(36)}`;
  }

  /**
   *
   * @param len
   * @returns
   */
  static randomNumberCode(len: number = 6): string {
    if (len < 1 || len > 40) len = 6;
    let code = '';
    while (code.length < len) {
      code = `${code}${Math.floor(Math.random() * 10)}`;
    }

    return code;
  }
}
