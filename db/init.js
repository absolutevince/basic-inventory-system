require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS products (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR (35),
	category VARCHAR (15),
	price INTEGER
)
`;

(async () => {
	console.log("Creating Table");
	const client = new Client({
		connectionString: `postgresql://vince:${process.env.DB_PASS}@localhost:5432/inventory`,
	});

	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("Table created");
})();
