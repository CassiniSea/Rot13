let str = 'Testa123/?'
function rot13(message){
	//your code here
	return str.replace(/([a-z])/g, (a) => {
		a = String.fromCharCode(a.charCodeAt() >= 110 ? a.charCodeAt() - 13 : a.charCodeAt() + 13)
		return a
	}).replace(/([A-Z])/g, (a) => {
		a = String.fromCharCode(a.charCodeAt() >= 78 ? a.charCodeAt() - 13 : a.charCodeAt() + 13)
		return a
	})
}

function rot13_2() {
	return str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
}

console.log(rot13(str))
console.log(rot13_2(str))