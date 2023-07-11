function storeCatalogue(array) {
	let res = [];
	let firstLetter;

	array.forEach((line) => {
		let [name, price] = line.split(" : ");
		res.push({ name, price });
	});

	res.sort((a, b) => a.name.localeCompare(b.name));

	res.forEach((line) => {
		if (firstLetter !== line.name[0].toUpperCase()) {
			firstLetter = line.name[0].toUpperCase();
			console.log(firstLetter);
		}
		console.log(`  ${line.name}: ${line.price}`);
	});
}