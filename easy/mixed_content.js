var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	if (line !== '') {
		var stringArray = [];
		var numberArray = [];
		line.split(',').forEach(function(char) {
			if (isNaN(char)) {
				stringArray.push(char);
			} else
				numberArray.push(char);
		});
		if (stringArray.length !== 0 && numberArray.length !== 0) {stringArray = stringArray + '|'}
		console.log(stringArray + numberArray);
	}
});
