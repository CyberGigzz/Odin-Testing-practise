"use strict";

var caeserCipher = require('./caeserCipher');
test('"abc" becomes "bcd"', function () {
  expect(caeserCipher('abc')).toBe('bcd');
});
test('"aAabBbzZz" becomes "bBbcCcaAa"', function () {
  expect(caeserCipher('aAabBbzZz')).toBe('bBbcCcaAa');
});
test('"a1ab#bc c" becomes "b1bc#cd d"', function () {
  expect(caeserCipher('a1ab#bc c')).toBe('b1bc#cd d');
});
test('1 becomes "not a string"', function () {
  expect(caeserCipher(1)).toBe('not a string');
});