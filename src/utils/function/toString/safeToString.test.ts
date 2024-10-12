import { safeToString } from './safeToString';

describe('safeToString', () => {
  test('converts number to string', () => {
    expect(safeToString(123)).toBe("123");
  });

  test('converts float to string', () => {
    expect(safeToString(45.67)).toBe("45.67");
  });

  test('converts boolean to string', () => {
    expect(safeToString(true)).toBe("true");
  });

  test('converts array to string', () => {
    expect(safeToString([1, 2, 3])).toBe("1,2,3");
  });

  test('converts object to string', () => {
    expect(safeToString({ key: 'value' })).toBe("[object Object]");
  });
});