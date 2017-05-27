//Verify a prime number质数

function isPrime(num) {
	var den = 2;
	while(num > den) {
		if(num % den === 0) {
			return false;
		}else {
			den++;
		}
	}
	return true;
}

console.log(isPrime(13));

// function prime(num) {
// 	if(num <= 1) {
// 		return '大于1';
// 	}
// 	if(String(num).indexOf('.') > -1) {//判断字符串中是否有小数点，没有的话返回-1
// 		return '输入整数'
// 	}
// 	if(num % 1 === 0 && num % num === 0) {
// 		for(var i = 2; i < num - 1; i++) {
// 			if(num % i == 0) {
// 				return 'this is not a prime number'
// 			}else {
// 				return 'this is a prime number'
// 			}
// 		}
// 	}
// }
// console.log(prime(1));
// console.log(prime(14));
// console.log(prime(17));
// console.log(prime(13));
// console.log(prime(10));
// console.log(prime(19));
// console.log(prime(19.1));


