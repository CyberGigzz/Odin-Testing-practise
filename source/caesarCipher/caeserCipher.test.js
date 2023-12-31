const caeserCipher = require('./caeserCipher');

test('"abc" becomes "bcd"', () => {
  expect(caeserCipher('abc')).toBe('bcd');
});

test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
  expect(caeserCipher('aAabBbzZz')).toBe('bBbcCcaAa');
});

test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
  expect(caeserCipher('a1ab#bc c')).toBe('b1bc#cd d');
});

test('1 becomes "not a string"', () => {
  expect(caeserCipher(1)).toBe('not a string');
});
