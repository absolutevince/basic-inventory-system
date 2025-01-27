const formatErrorMessage = (error) => {
	const split = error.toString().split(":");
	switch (error.code) {
		case "42PO7":
			return `Inventory ${error}`;
		default:
			return split[1];
	}
};

module.exports = formatErrorMessage;
