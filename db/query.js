const asyncHandler = require("express-async-handler");
const pool = require("./pool");

const createInventoryQuery = async ({ name }) => {
	const { rows } = await getInventoryNamesQuery();

	// return an error object instead when name already exists
	for (let i = 0; i < rows.length; i++) {
		if (rows[i].table_name.toLowerCase() === name.toLowerCase()) {
			throw new Error("Inventory Already Exists");
		}
	}

	await pool.query(`CREATE TABLE IF NOT EXISTS ${name} (name VARCHAR (35))`);
};

const getInventoryNamesQuery = async () => {
	return await pool.query(
		"SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'public'",
	);
};

module.exports = {
	getInventoryNamesQuery,
	createInventoryQuery,
};
