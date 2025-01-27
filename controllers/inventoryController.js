const { addItemQuery, deleteItemQuery } = require("../db/query");
const renderInventoryView = require("../utils/renderInventoryView");

const inventoryGet = async (req, res) => {
	await renderInventoryView(res, req.params.id);
};

const inventoryAddPost = async (req, res) => {
	await addItemQuery({
		name: req.body.name,
		price: req.body.price,
		tableId: req.params.id,
	});
	res.redirect(`/inventory/${req.params.id}`);
};

const inventoryDeletePost = async (req, res) => {
	await deleteItemQuery(req.params.id, req.query.id);
	res.redirect(`/inventory/${req.params.id}`);
};

module.exports = { inventoryGet, inventoryAddPost, inventoryDeletePost };
