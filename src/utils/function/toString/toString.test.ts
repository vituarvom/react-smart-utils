import { convertToString } from './toString';

describe('convertToString', () => {
  test('converts number to string', () => {
    expect(convertToString(123)).toBe("123");
  });

  test('converts float to string', () => {
    expect(convertToString(45.67)).toBe("45.67");
  });

  test('converts boolean to string', () => {
    expect(convertToString(true)).toBe("true");
  });

  test('converts array to string', () => {
    expect(convertToString([1, 2, 3])).toBe("1,2,3");
  });

  test('converts object to string', () => {
    expect(convertToString({ key: 'value' })).toBe("[object Object]");
  });
});