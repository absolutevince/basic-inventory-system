const { getInventoryNamesQuery } = require("../db/query");
const formatErrorMessage = require("./formatErrorMessage");
const formatTableNames = require("./formatTableNames");

const renderIndexView = async (res, error = null, extras = null) => {
	const { rows } = await getInventoryNamesQuery();

	const tables = formatTableNames(rows);
	res.render("indexView", {
		title: "Expenses Inventory System",
		inventories: tables,
		error: error ? formatErrorMessage(error) : null, // convert table_name to name, to be able to use it on views without typing '_'.
		extras: extras,
	});
};

module.exports = renderIndexView;
