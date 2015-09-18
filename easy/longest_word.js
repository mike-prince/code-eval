var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	if (line !== '') {
		var word = line.split(' ');
		var longest = 0;
		for (var i = 0; i < word.length; i++) {
			if (longest < word[i].length) {
				longest = word[i].length;
				result = word[i];
			}
		}
		console.log(result);
	}
});
