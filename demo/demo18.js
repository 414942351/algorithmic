// Total number of zeros from 1 upto n?
for(var i = 1; i <= 200; i++) {
	console.log(i);
}
function findZero(n) {
	var init = 1;
	var count = 0;
	for(var i = init; i <=n; i++) {
		var toStr = i.toString();
		// console.log(toStr);
		var len = toStr.length;
		for(var j = 0; j < len; j++) {
			if(toStr.charAt(j) === '0') {
				count++;
			}
		}
	}
	return count;
}
console.log(findZero(200))