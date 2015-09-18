var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	if (line !== '') {
		var sum = 0;
		line.split('').forEach(function(num) {
			return sum += parseInt(num);
		});
		console.log(sum);
	}
});
