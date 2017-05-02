//stack

//last in first out

function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}
function push(element) {
	this.dataStore[this.top++] = element;
}
function pop() {
	return this.dataStore[--this.top];
}
function peek() {
	return this.dataStore[this.top - 1];
}
function length() {
	return this.top;
}
function clear() {
	this.top = 0;
}
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());



//判断字符串是否为回文  asddsa
function isPalindrome(word) {
	var s = new Stack();
	for(var i = 0; i < word.length; ++i) {
		s.push(word[i]);
	}
	var rword = '';
	while(s.length() > 0) {
		rword += s.pop();
	}
	if(word == rword) {
		return true;
	}else {
		return false;
	}
}

var word = 'hello';
if(isPalindrome(word)) {
	console.log(word + 'is a palindrome.');
}else {
	console.log(word + 'is not a palindrome');
}
word = 'racecar';
if(isPalindrome(word)) {
	console.log(word + 'is a palindrome.');
}else {
	console.log(word + 'is not a palindrome');
}





















