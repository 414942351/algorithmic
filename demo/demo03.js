// Fibonacci斐波那契数列
//  1 1 2 3 5 8 13

// function fib(n) {
// 	var fibo = [0, 1];
// 	if(n <= 2) {
// 		return 1;
// 	}
// 	for(var i = 2; i <= n; i++) {
// 		fibo[i] = fibo[i-2] + fibo[i-1]; 
// 	}
// 	return fibo[n];
// }




function fib(n) {
	if(n === 1 || n === 2) {
		return 1;
	}
	return fib(n-1) + fib(n-2);
}
console.log(fib(7));