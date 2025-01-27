const asyncHandler = require("express-async-handler");
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
	return await pool.query(
		`SELECT name, id FROM ${invNamesTable} WHERE type = 'inventory'`,
	);
};

const getInventoryId = async (name) => {
	await pool.query(`SELECT id FROM ${invNamesTable}  WHERE name = ${name}`);
};

const removeInventoryQuery = async (id) => {
	const { rows: tableNamesRows } = await pool.query(`
		SELECT name FROM ${invNamesTable}
		WHERE id = ${id}
	`);

	const tableName = tableNamesRows[0].name;

	await pool.query(`
		DROP TABLE ${tableName}
`);

	await pool.query(`
		DELETE FROM ${invNamesTable}
		WHERE id = ${id}
`);
};

module.exports = {
	getInventoryNamesQuery,
	createInventoryQuery,
	getInventoryId,
	removeInventoryQuery,
};
