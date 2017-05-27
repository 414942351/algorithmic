// Reverse a string in JavaScript?
var str = 'fuck the damn world';
function reverseStr(str) {
	var arr = str.split(' '),
		len = arr.length,
	// console.log(arr);
		retArr = [];
	for(var i = len; i > 0; i--) {
		console.log(i);
		retArr.push(arr[i-1]);
	}
	console.log(retArr.join(' '));
}

reverseStr(str);