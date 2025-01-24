const formatErrorMessage = (error) => {
	const split = error.toString().split(":");
	return { type: split[0], message: split[1] };
};

module.exports = formatErrorMessage;
