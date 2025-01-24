const formatTableNames = (names) => {
	return names.map((t) => {
		const split = t.table_name.split("");
		const capitalized = [split.shift().toUpperCase(), ...split].join("");
		return {
			name: capitalized,
		};
	});
};

module.exports = formatTableNames;
