const pool = require("./pool");

exports.getProducts = async () => {
	const { rows, fields } = await pool.query("SELECT * FROM products");
	return { rows, fields };
};
