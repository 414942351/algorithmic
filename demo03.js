//Array include Object
function Point(x, y) {
	this.x = x;
	this.y = y;
}

function displayPts(arr) {
	for(var i = 0; i < arr.length; ++i) {
		console.log(arr[i].x + ", " + arr[i].y);
	}
}

var p1 = new Point(1, 2);
var p2 = new Point(3, 5);
var p3 = new Point(2, 8);
var p4 = new Point(4, 4);

var points = [p1, p2, p3, p4];
for(var i = 0; i < points.length; ++i) {
	console.log('Point' + parseInt(i + 1) + ': ' + points[i].x + ', ' + points[i].y);
}

var p5 = new Point(12, -3);
points.push(p5);
console.log('After push: ');
displayPts(points);
points.shift();
console.log('After shift: ');
displayPts(points);
//students achievement Object practise

var achievementObj = {
	achievement: [],
	addAchievement: function(type, num) {
		var studentAch = {
			type: type,
			num: num
		};
		this.achievement.push(studentAch);
	},
	showAchievement: function() {
		// console.log(this.achievement)
		var len = this.achievement.length;
		for(var i = 0; i < len; i++) {
			console.log(i);
			return this.achievement[i].type + ', ' + this.achievement[i].num;
		}
	}
}
achievementObj.addAchievement('English', 90);
console.log(achievementObj.showAchievement());

//reverse words

var arr = ['yan', 'bing', 'is', 'handsome', 'and', 'heiheihei'];
// console.log(arr.reverse());
// console.log(arr.sort(function(a, b) {
// 	return b - a; 
// }));

function arrReverse(arr) {
	var len = arr.length;
	var ret = [];
	for(var i = 0; i < len; i++) {
		ret[i] = arr[len-i-1];
	}
	return ret
}
console.log(arrReverse(arr));

//concat str
// arr.join?
// var obj = {

// }



































