const pool = require("./pool");

exports.createInventoryQuery = async ({ name }) => {
	await pool.query(`CREATE TABLE IF NOT EXISTS ${name} (name VARCHAR (35))`);
};

exports.getTableNamesQuery = async () => {
	return await pool.query(
		"SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'public'",
	);
};
