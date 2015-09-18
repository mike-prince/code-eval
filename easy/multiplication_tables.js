var array = [1,2,3,4,5,6,7,8,9,10,11,12];

for (i = 1; i <= 12; i++) {
	var result = [];
	array.forEach(function(num) {
		var calc = num * i;
		while calc.length < 4 {
			calc = calc;
		}
	});
}

// Int number = 123;
// String formatted = String.format("%08d", number);