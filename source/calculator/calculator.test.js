'use strict';

const calculator = require('./calculator'); // Adjust the path as needed

describe('Calculator', () => {
  it('adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('subtracts two numbers correctly', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  it('multiplies two numbers correctly', () => {
    expect(calculator.multiply(2, 7)).toBe(14);
  });

  it('divides two numbers correctly', () => {
    expect(calculator.divide(15, 5)).toBe(3);
  });

  it('throws an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
  });
});

