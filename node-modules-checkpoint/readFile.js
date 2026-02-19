const fs = require('fs');

// Reading the file synchronously
const content = fs.readFileSync('message.txt', 'utf8');

console.log("File Content:", content);
