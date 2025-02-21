import { RandomUtil } from '../../src/utils/random/random.util';

describe('Utils RandomUtil tests', () => {
  const mockMath = Object.create(globalThis.Math);
  const originRandom = globalThis.Math.random;
  const originNow = globalThis.Date.now;
  beforeAll(() => {
    mockMath.random = () => 0.8;
    globalThis.Math = mockMath;
    globalThis.Date.now = () => 1740121122845;
  });
  afterAll(() => {
    globalThis.Math.random = originRandom;
    globalThis.Date.now = originNow;
  });
  it('state should an number string', () => {
    const state = RandomUtil.randomState();

    expect(/[\d]/.test(state)).toBe(true);
  });

  it('Short id shuld get an random string is Ss_ssssssssss', () => {
    const result = 'Ss_ssssssssss';
    const shortId = RandomUtil.shortId();

    expect(shortId).toBe(result);
  });

  it('Test clientUUID should return xaim_4rc7q2vgm64', () => {
    const clientUuid = RandomUtil.clientUUID();
    expect(clientUuid).toBe('xaim_4rc7q2vgm64');
  });

  it('Test clientUUID should return xai_4rc7q2vgm64', () => {
    const clientUuid = RandomUtil.clientUUID('xai');
    expect(clientUuid).toBe('xai_4rc7q2vgm64');
  });

  it('Test createChatid should return XBOT_2u0xhp3wxek', () => {
    const clientUuid = RandomUtil.createChatid();
    expect(clientUuid).toBe('XBOT_2u0xhp3wxek');
  });
  it('Test createReqid should return xmob.1ikjkqa0t.3f7guac', () => {
    const clientUuid = RandomUtil.createReqid();
    expect(clientUuid).toBe('xmob.1ikjkqa0t.3f7guac');
  });

  it('Test createReqid should return tt.1ikjkqa0t.3f7guac', () => {
    const clientUuid = RandomUtil.createReqid('tt');
    expect(clientUuid).toBe('tt.1ikjkqa0t.3f7guac');
  });

  it('Test createReqid should return xmid.662mkm7ef6rkt', () => {
    const clientUuid = RandomUtil.createMsgid();
    expect(clientUuid).toBe('xmid.662mkm7ef6rkt');
  });
});
