var file = process.argv[2];
var fs = require('fs');
var buf = fs.readFileSync(file).toString();

console.log(buf.split('\n').length - 1);

