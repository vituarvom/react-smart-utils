import { camelCase } from "./camelCase";

describe('camelCase', () => {
  test('converts multiple words with mixed case', () => {
    expect(camelCase('React Utils Library')).toBe('reactUtilsLibrary');
  });

  test('converts two words in lowercase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  test('returns the same word when given a single word in lowercase', () => {
    expect(camelCase('hello')).toBe('hello');
  });

  test('converts a single uppercase word to lowercase', () => {
    expect(camelCase('WORLD')).toBe('world');
  });

  test('handles multiple spaces between words', () => {
    expect(camelCase('  hello   world  ')).toBe('helloWorld');
  });

  test('returns an empty string when given an empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('trims leading and trailing spaces', () => {
    expect(camelCase('   JavaScript is fun   ')).toBe('javascriptIsFun');
  });

  test('handles strings with special characters', () => {
    expect(camelCase('JavaScript 101 guide')).toBe('javascript101Guide');
  });

  test('handles strings with numbers and symbols', () => {
    expect(camelCase('foo123 bar456')).toBe('foo123Bar456');
  });

  test('handles strings with mixed case', () => {
    expect(camelCase('HeLLo WoRLd')).toBe('helloWorld');
  });

  test('handles single-word uppercase', () => {
    expect(camelCase('HELLO')).toBe('hello');
  });

  test('handles one-letter words', () => {
    expect(camelCase('a b c')).toBe('aBC');
  });
});