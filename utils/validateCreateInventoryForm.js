const { body, validationResult } = require("express-validation");
const { getInventoryNamesQuery } = require("../db/query");

const validateCreateInventoryForm = () => {
	const validations = [
		body("name")
			.trim()
			.custom(async (value) => {
				const names = getInventoryNamesQuery();
			}),
	];
	return { validations, validationResult };
};

module.exports = validateCreateInventoryForm;
