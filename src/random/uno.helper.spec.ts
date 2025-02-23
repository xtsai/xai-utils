import { UnoHelper, UsernoInfo } from './uno.helper';

describe('Uno helper test', () => {
  const seeds = ['888'];
  it('Test buildUno seqno 1 should return 1g6d9y7m9', () => {
    const ret: UsernoInfo = UnoHelper.buildUno(17, seeds);

    expect(ret).toStrictEqual({
      uno: '1g6d9y7m9',
      value: '04088800000017',
    });
  });

  it('Test parsed uno 1g6d9y7m9 should return 04088800000017',()=>{
    const parsed = UnoHelper.parseUno('1g6d9y7m9')
    expect(parsed).toStrictEqual('04088800000017');
  })

  it('Test validat uno 04088800000017 should return true', () => {
    expect(UnoHelper.validUno('04088800000017')).toBe(true);
  });

  it('Test validat uno 1g6d9y7m9 should return true', () => {
    expect(UnoHelper.validUno('1g6d9y7m9')).toBe(true);
  });
});
