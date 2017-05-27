var sentence = 'I was a good man many years ago'

function reverseWordsInPlace(sentence) {
	return sentence.split(' ').reverse().join(' ').split('').reverse().join('');
}
	// var ret = [];
	// var tempArr = sentence.split(' ');
	// tempArr.forEach(function(words) {
	// 	var tempWords = words.split('');
	// 	var retWords = tempWords.reverse();
	// 	ret.push(retWords);
	// });
	// var retArr = [];
	// ret.forEach(function(words) {
	// 	retArr.push(words.join(''));
	// });
	// console.log(retArr.join(' '));
// }

console.log(reverseWordsInPlace(sentence));