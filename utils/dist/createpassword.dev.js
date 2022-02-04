"use strict";

var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*_-+=';

var createPassword = function createPassword(length, hasNumbers, hasSymbols) {
  var chars = alpha;
  hasNumbers ? chars += numbers : '';
  hasSymbols ? chars += symbols : '';
  return generatePassword(length, chars);
};

var generatePassword = function generatePassword(length, chars) {
  var password = '';

  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

module.exports = createPassword;
//# sourceMappingURL=createpassword.dev.js.map
