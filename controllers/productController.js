const { addListener } = require("../db/pool");
const { getProducts, addProduct, getCategories } = require("../db/query");

exports.getProductsGet = async (req, res) => {
	const { rows, fields } = await getProducts();
	const categories = await getCategories();

	res.render("productView", {
		title: "Inventory",
		products: rows,
		fields: fields,
		categories: categories,
	});
};

exports.addProductGet = async (req, res) => {
	res.send("Add product form");
};

exports.addProductPost = async (req, res) => {
	const { name, category, price } = req.body;
	await addProduct({ name, category, price });
	res.redirect("/product");
};
