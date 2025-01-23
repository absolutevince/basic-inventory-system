const { getProducts } = require("../db/query");

exports.getProducts = async (req, res) => {
	const { rows, fields } = await getProducts();

	console.log(fields);

	res.render("product", {
		title: "Inventory",
		products: rows,
		fields: fields,
	});
};

exports.addProductGet = async (req, res) => {
	res.send("Add product form");
};

exports.addProductPost = async (req, res) => {
	res.send("Add product complete");
};
