// Generate random between 5 to 7 by using defined function.

function randomBetween(a, b) {
	return 5 + Math.random() * 2
}

for(var i = 0; i < 20; i++) {
console.log(randomBetween(5, 7));
	
}
