function heroicInventory(array) {
	let res = [];
	
	array.forEach((line) => {
		let [name, level, items] = line.split(" / ");
		level = Number(level);
		items = items ? items.split(", ") : [];
		res.push({ name, level, items });
	});
	console.log(JSON.stringify(res));
}