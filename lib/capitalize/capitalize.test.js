'use strict';

var capitalize = require('./capitalize');
test('"test" should become "Test"', function () {
  expect(capitalize('test')).toBe('Test');
});