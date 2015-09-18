var fs = require('fs');

function SwapCase(str) {
	var result = '';
	for (var i = 0; i <  str.length; i++) {
		if (str.charAt(i) === str.charAt(i).toUpperCase()) {
			result += str.charAt(i).toLowerCase();
		} else {
			result += str.charAt(i).toUpperCase();
		}
	}
	return result;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	console.log(SwapCase(line));
});
