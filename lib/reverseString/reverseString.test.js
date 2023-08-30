'use strict';

var reverseString = require('./reverseString');
test('"Slava"', function () {
  expect(reverseString('Slava')).toBe('avalS');
});