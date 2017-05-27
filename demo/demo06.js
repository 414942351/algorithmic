// merge two sorted Array

var arr1 = [1,2,3,4,5,6];
var arr2 = [8,9,10,11,12];
function mergeArray(a, b) {
	var result = [],
		aElm = a[0],
		bElm = b[0],
		i = 1,
		j = 1;
	if(a.length === 0) {
		return b;
	}
	if(b.length ===0) {
		return a;
	}
	while(aElm || bElm) {
		if((aElm && !bElm) || aElm < bElm) {
			result.push(aElm);
			aElm = a[i++];
		}else {
			result.push(bElm);
			bElm = b[j++];
		}
	}
	return result;
}
console.log(mergeArray(arr1, arr2));


