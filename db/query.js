const pool = require("./pool");

exports.getProducts = async () => {
	const { rows, fields } = await pool.query("SELECT * FROM products");
	return { rows, fields };
};

exports.addProduct = async ({ name, category, price }) => {
	await pool.query(`
		INSERT INTO products (name, category, price)
		VALUES ('${name}', '${category}', ${price});
`);
};

exports.getCategories = async () => {
	const { rows } = await pool.query(`
		SELECT DISTINCT category FROM products;
`);

	return rows;
};
