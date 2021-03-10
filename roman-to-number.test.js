const { expect, test } = require('@jest/globals');
const romanToNumber = require('./roman-to-number');

describe('romanToNumber', () => {
  test('returns a number type', () => {
    const typeOf = typeof romanToNumber('IV');
    expect(typeOf).toBe('number');
  });
  test('returns the correct value', () => {
    let result = romanToNumber('MDXV');
    expect(result).toBe(1515);
    result = romanToNumber('XX');
    expect(result).toBe(20);
    // expect(romanToNumber('XVII').toBe(17));
  });
});
