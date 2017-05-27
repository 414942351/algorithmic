// Find the largest sum of any two elements?

var arr = [2,4,5,2,3,1,2,3,54,1,5];
function largestSum(arr) {
	var len = arr.length;
	var sortedArr = arr.sort(function(a, b) {
		return a - b;
	});
	return arr[len-1] + arr[len-2];
}
console.log(largestSum(arr));