const capitalize = require("./capitalize");

const formatTableNames = (names) => {
	return names.map((t) => {
		return {
			name: capitalize(t.name),
			id: t.id,
		};
	});
};

module.exports = formatTableNames;
