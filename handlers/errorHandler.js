const formatTableNames = require("../utils/formatTableNames");
const { getInventoryNamesQuery } = require("../db/query");
const formatErrorMessage = require("../utils/formatErrorMessage");

const errorHandler = async (err, req, res, next) => {
	const { rows } = await getInventoryNamesQuery();

	const tables = formatTableNames(rows);
	const error = formatErrorMessage(err);

	res.render("indexView", {
		title: "Basic Inventory System",
		inventories: tables,
		error: error,
	});
};

module.exports = errorHandler;
