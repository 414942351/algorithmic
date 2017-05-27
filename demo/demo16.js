// Check whether any two numbers in an array sums to a given number?

var arr = [1,2,3,4,5,6,6,7,8,8,8];
var num = 115;
function isSum(arr, num) {
	var len = arr.length;
	for(var i = 0; i < len - 1; i++) {
		for(var j = 1; j < len; j++) {
			console.log(i, arr[j]);
			if(arr[i] + arr[j] !== num) {
				continue;
				// return true;
			}else {
				return true;
				// continue;
			}
		}
		// return false;
	}
	return false;
} 
console.log(isSum(arr, num));