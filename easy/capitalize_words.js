var fs = require('fs');

function titleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1);
	});
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	console.log(titleCase(line));
});
