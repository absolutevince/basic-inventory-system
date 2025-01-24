const { createInventoryQuery, getTableNamesQuery } = require("../db/query");

const inventories = [
	{ name: "Foods" },
	{ name: "Electronics" },
	{ name: "Bills" },
];

exports.indexHomepageGet = async (req, res) => {
	const { rows } = await getTableNamesQuery();
	// convert table_name to name, to be able to use it on views without typing '_'.
	const tables = rows.map((t) => {
		const split = t.table_name.split("");
		const capitalized = [split.shift().toUpperCase(), ...split].join("");
		return {
			name: capitalized,
		};
	});

	res.render("indexView", {
		title: "Basic Inventory System",
		inventories: tables,
	});
};

exports.indexCreateInventoryPost = async (req, res) => {
	await createInventoryQuery({ name: req.body.name });
	res.redirect("/");
};
