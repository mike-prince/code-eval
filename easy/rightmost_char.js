var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	if (line !== '') {
		var el = line.split(',');
		console.log(el[0].lastIndexOf(el[1]));
	}
});