function createSortedList() {
	const collection = [];

	const result = {
		add,
		remove,
		get,
		size: 0,
	};

	return result;

	function add(num) {
		collection.push(num);
		this.size++;
		collection.sort((a, b) => a - b);
	}

	function remove(index) {
		const valid = checkIndex(index);
		if (valid) {
			collection.splice(index, 1);
			this.size--;
		}
	}

	function get(index) {
		const valid = checkIndex(index);

		if (valid) {
			return collection[index];
		}
	}

	function checkIndex(index) {
		return index >= 0 && index < collection.length;
	}
}