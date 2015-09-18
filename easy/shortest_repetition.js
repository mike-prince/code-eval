var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {

	var firstLetter = line.charAt(line.length-1);
	console.log(firstLetter);



});
