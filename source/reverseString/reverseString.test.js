'use strict'

const reverseString = require('./reverseString');

test('"Slava"', () => {
    expect(reverseString('Slava')).toBe('avalS');
  });