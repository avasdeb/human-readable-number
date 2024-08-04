module.exports = function toReadable(number) {
	const zero = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'];
	const ty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let bor = '';
	if (number < 20) {
		return zero[number];
	}
	if (number < 100) {
		if (!(number % 10)) {
			return ty[number / 10];
		} else {
			return ty[Math.floor(number / 10)] + " " + zero[number % 10];
		}
	}
	bor = zero[Math.floor(number / 100)] + " hundred";
	if (number % 100 == 0) { return bor }
	else if (number % 100 < 20) {
		return bor += ' ' + zero[number % 100];
	}
	if (number % 100 < 100) {
		if (!(number % 10)) {
			bor += " " + ty[Math.floor((number % 100) / 10)];
		} else {
			bor += " " + ty[Math.floor((number % 100) / 10)] + " " + zero[number % 10];
		}
	}
	return bor;
}
