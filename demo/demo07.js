// Swap two numbers without using a temp variable?
var a = 10;
var b = 22;
function swap(a, b) {
	var c = a + b;
	a = c - a;
	b = c - b;
	console.log('a=' + a, 'b=' + b);
}

swap(a, b);