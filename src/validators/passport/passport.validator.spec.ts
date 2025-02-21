import {
  isMiddelPassword,
  isSimplePassword,
  isStrongPassword,
} from './passport.validator';

describe('Validators tests', () => {
  it('Test  isStrongPassword passport[A18$ab&979]  should return true', () => {
    expect(isStrongPassword('A18$ab&979')).toBe(true);
  });

  it('Test  isStrongPassword passport[A1866666979]  should return false', () => {
    expect(isStrongPassword('A1866666979')).toBe(false);
  });

  it('Test  isMiddelPassword passport[A1866666979]  should return true', () => {
    expect(isMiddelPassword('As866#')).toBe(true);
  });

  it('Test  isSimplePassword passport[A1866666979]  should return true', () => {
    expect(isSimplePassword('111111')).toBe(true);
  });
});
