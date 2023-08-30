'use strict';

function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    return 'not an array';
  }

  if (!arr.every((el) => typeof el === 'number')) {
    return 'not an array';
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
