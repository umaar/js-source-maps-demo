let NumbersAPI = number =>
	fetch(`http://numbersapi.com/${number}/year`)
	.then(response => response.text());

async function init() {
	let result = await NumbersAPI(20);
	debugger;
	console.log(result);
}

export default init;