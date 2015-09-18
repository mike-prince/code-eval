var fs = require('fs');

function lower(txt) {
	return txt.toLowerCase();
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	console.log(lower(line))
})
