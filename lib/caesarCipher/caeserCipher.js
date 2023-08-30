"use strict";

function caeserCipher(str) {
  if (typeof str === 'string') {
    return str.split('').map(function (_char) {
      var charCode = _char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letter
        return String.fromCharCode((charCode - 65 + 1) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letter
        return String.fromCharCode((charCode - 97 + 1) % 26 + 97);
      } else {
        // Non-letter character
        return _char;
      }
    }).join('');
  } else return 'not a string';
}
module.exports = caeserCipher;