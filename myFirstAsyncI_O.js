var file = process.argv[2];
var fs = require('fs');
fs.readFile(file, 'utf8', function(err, buf){
	if (err) {
		return console.log(err);
	}
	console.log(buf.split('\n').length - 1);
})