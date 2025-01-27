const pool = require("./pool");
const {
	addInventoryQueryTemplate,
	createProducTableQueryTemplate,
} = require("../utils/queryUtils");

const invNamesTable = process.env.INV_NAMES_TABLE;

const createInventoryQuery = async ({ name }) => {
	await pool.query(createProducTableQueryTemplate(name));
	await pool.query(addInventoryQueryTemplate(name));
};

const getInventoryNamesQuery = async () => {
	return await pool.query(`SELECT name, id FROM ${invNamesTable}`);
};

const getInventoryId = async (name) => {
	await pool.query(`SELECT id FROM ${invNamesTable}  WHERE name = '${name}'`);
};
const removeInventoryQuery = async (id) => {
	await pool.query(`DROP TABLE ${await getInventoryNameQuery(id)}`);
	await pool.query(`
		DELETE FROM ${invNamesTable}
		WHERE id = '${id}'
`);
};

const getInventoryQuery = async (id) => {
	const { rows } = await pool.query(`
		SELECT * FROM ${await getInventoryNameQuery(id)}
	`);

	return rows;
};

const getInventoryNameQuery = async (id) => {
	const { rows } = await pool.query(
		`SELECT name FROM ${invNamesTable} WHERE id = ${id}`,
	);
	return rows[0].name;
};

const addItemQuery = async ({ name, price, tableId }) => {
	await pool.query(`
		INSERT INTO ${await getInventoryNameQuery(tableId)} (name, price)
		VALUES ('${name}',${price})
`);
};

const deleteItemQuery = async (tableId, itemId) => {
	await pool.query(`
		DELETE FROM ${await getInventoryNameQuery(tableId)} WHERE id = ${itemId}
`);
};

module.exports = {
	deleteItemQuery,
	addItemQuery,
	getInventoryNamesQuery,
	createInventoryQuery,
	getInventoryId,
	removeInventoryQuery,
	getInventoryQuery,
	getInventoryNameQuery,
};
