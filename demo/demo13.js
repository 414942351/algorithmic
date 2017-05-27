// Verify a word as palindrome?回文数

function isPalindrome(num) {
	var numArr = num.split('');
	var len = numArr.length;
	for(var i = 0; i < len; i++) {
		if(numArr[i] === numArr[len - i - 1]) {
			continue;
		}else {
			return false;
		}
	}
	return true;
}
console.log(isPalindrome('aabcbaa'))
console.log(isPalindrome('afhkldasf'))
