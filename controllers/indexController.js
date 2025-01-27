const { body, validationResult } = require("express-validation");
const asyncHandler = require("express-async-handler");
const { createInventoryQuery, removeInventoryQuery } = require("../db/query");
const renderIndexView = require("../utils/renderIndexView");

const inventories = [
	{ name: "Foods" },
	{ name: "Electronics" },
	{ name: "Bills" },
];

const indexHomepageGet = async (req, res) => {
	await renderIndexView(res);
};

const indexCreateInventoryPost = asyncHandler(async (req, res, next) => {
	await createInventoryQuery({ name: req.body.name.toLowerCase() });
	res.redirect("/");
});

const indexRemoveInventoryPost = asyncHandler(async (req, res) => {
	await removeInventoryQuery(Number(req.params.id));
	res.redirect("/");
});

module.exports = {
	indexHomepageGet,
	indexCreateInventoryPost,
	indexRemoveInventoryPost,
};
