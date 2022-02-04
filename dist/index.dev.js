#!/usr/bin/env node
"use strict";

var commander = require('commander');

var chalk = require('chalk');

var clipboardy = require('clipboardy');

var createPassword = require('./utils/createPassword');

var savePassword = require('./utils/savePassword');

commander.version('1.0.0').description('Simple Password Generator');
commander.option('-s, --save', 'save password to passwords.txt').option('-l, --length <number>', 'length of the password', '6').option('-nn, --no-numbers', 'remove numbers from password generation').option('-ns, --no-symbols', 'remove symbols from password generation').parse();

var _commander$opts = commander.opts(),
    length = _commander$opts.length,
    save = _commander$opts.save,
    numbers = _commander$opts.numbers,
    symbols = _commander$opts.symbols; // Generate password


var generatedPassword = createPassword(length, numbers, symbols); // Save to file

if (save) {
  savePassword(generatedPassword);
} // Copy to clipboard


clipboardy.writeSync(generatedPassword); // Output generated password

console.log(chalk.blueBright('Generated Password: ') + chalk.bold(generatedPassword));
console.log(chalk.green('Password copied to clipboard'));
//# sourceMappingURL=index.dev.js.map
