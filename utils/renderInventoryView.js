const { getInventoryQuery, getInventoryNameQuery } = require("../db/query");
const capitalize = require("./capitalize");

const renderInventoryView = async (res, id) => {
	const data = await getInventoryQuery(id);

	res.render("inventoryView", {
		title: capitalize(await getInventoryNameQuery(id)),
		id: id,
		data,
	});
};

module.exports = renderInventoryView;
