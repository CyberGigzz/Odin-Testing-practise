"use strict";

var analyzeArray = require('./analyzeArray');
test('normal number array', function () {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
});
test('array with non-number', function () {
  expect(analyzeArray([1, 2, 6, 7, '5'])).toBe('not an array');
});
test('array-like object (string)', function () {
  expect(analyzeArray('12345')).toBe('not an array');
});