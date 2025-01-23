const { Pool } = require("pg");

module.exports = new Pool({
	host: process.env.POOL_HOST,
	user: "vince",
	database: "inventory",
	password: process.env.DB_PASS,
	port: 5432,
});
