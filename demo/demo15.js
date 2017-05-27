// Find missing number from unsorted array of integers.
var arr = [18,4,5,2,6,10,7];
function findMissing(arr) {
	var sortedArr = arr.sort(function(a, b) {
		return a - b;
	});
	console.log(sortedArr)
	var missing = [];
	var len = sortedArr.length;
	for(var i = 0; i < len - 1; i++) {
		if(sortedArr[i + 1] - sortedArr[i] > 1) {
			var temp = sortedArr[i] + 1;
			while(temp < sortedArr[i+1]) {
				missing.push(temp);
				temp++
			}
			// missing.push(sortedArr[i+1] - sortedArr[i]);
		}
	}

	return missing;
	// return sortedArr;
}
console.log(findMissing(arr));