const formatTableNames = require("../utils/formatTableNames");
const asyncHandler = require("express-async-handler");
const { createInventoryQuery, getInventoryNamesQuery } = require("../db/query");

const inventories = [
	{ name: "Foods" },
	{ name: "Electronics" },
	{ name: "Bills" },
];

const indexHomepageGet = async (req, res) => {
	const { rows } = await getInventoryNamesQuery();
	// convert table_name to name, to be able to use it on views without typing '_'.
	const tables = formatTableNames(rows);

	res.render("indexView", {
		title: "Basic Inventory System",
		inventories: tables,
		error: null,
	});
};

const indexCreateInventoryPost = asyncHandler(async (req, res, next) => {
	try {
		await createInventoryQuery({ name: req.body.name });
		res.redirect("/");
	} catch (error) {
		next(error);
	}
});

module.exports = {
	indexHomepageGet,
	indexCreateInventoryPost,
};
