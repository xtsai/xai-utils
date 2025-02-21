import { isInvalidDate, isNotEmptyString, isNumber } from './is';

describe('Validators IS tests', () => {
  it('test 1 should return true', () => {
    expect(isNumber(1)).toBe(true);
  });

  it('test "2" should return false', () => {
    expect(isNumber('2')).toBe(false);
  });

  it('test Number(1.0) should return true', () => {
    expect(isNumber(Number(1.0))).toBe(true);
  });

  it('test isNotEmptyString null should return false', () => {
    expect(isNotEmptyString(null)).toBe(false);
  });

  it('test isNotEmptyString null should return false', () => {
    expect(isNotEmptyString('')).toBe(false);
  });

  it('test isInvalidDate null should return true', () => {
    expect(isInvalidDate('')).toBe(true);
  });

  it('test isInvalidDate 2012-12-01 should return false', () => {
    expect(isInvalidDate('2012-12-01')).toBe(false);
  });
});
