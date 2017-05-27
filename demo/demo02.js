// find all prime factors of a Number质因数

function findPrimeFactors(num) {
	var primeFactors = [];
	var den = 2;
	while(num > 2) {
		if(num % den === 0) {
			primeFactors.push(den);
			num = num / den;
		}else {
			den++
		}
	}
	return primeFactors;
}

console.log(findPrimeFactors(12));
console.log(findPrimeFactors(88));
console.log(findPrimeFactors(77));
