function calorieObject(array) {
	let result = {};

	for (let i = 0; i < array.length; i += 2) {
		result[array[i]] = Number(array[i + 1]);
	}
	console.log(result);
}