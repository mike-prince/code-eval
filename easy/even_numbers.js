var fs = require('fs');

function even(n) {
	return (n%2 === 0) ? 1 : 0;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	if (line !== '') {
		console.log(even(line));
	}
});
