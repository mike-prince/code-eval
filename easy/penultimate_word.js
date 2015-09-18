var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	if (line !== "") {
		word = line.split(' ')
		penultimate = word[word.length - 2]
		console.log(penultimate)
	}
});
