require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS inventories (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR (35),
	type VARCHAR (15)
);
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
