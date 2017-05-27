//remoive duplicate memners from an array

Array.prototype.unique = function() {
	var arr = [];
	var obj = {};
	var len = this.length;
	for(var i = 0; i < len; i++) {
		if(!obj[this[i]]) {
			obj[this[i]] == true;
			arr.push(this[i]);
		}
	}
	return arr;
}