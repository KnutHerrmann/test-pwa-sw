const fs = require('fs-extra');

// update version.js
const VERSION_FILE = 'src/version.js';
const VERSION_DEFINITION = 'export const VERSION = '
fs.readFile(VERSION_FILE, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const newVersion = (parseInt(data.substr(data.indexOf(VERSION_DEFINITION) + VERSION_DEFINITION.length)) + 1);
  const result = VERSION_DEFINITION + newVersion;
  console.log('--- Version ' + newVersion + ' ---');

  fs.writeFile(VERSION_FILE, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
