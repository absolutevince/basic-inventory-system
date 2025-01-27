require("dotenv").config();
const pool = require("../db/pool");

const invNamesTable = process.env.INV_NAMES_TABLE;
const addInventoryQueryTemplate = (name) => {
	return `
	INSERT INTO ${invNamesTable} (name) VALUES ('${name}')
`;
};

const createProducTableQueryTemplate = (name) => {
	return `
		CREATE TABLE IF NOT EXISTS ${name} (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
		name VARCHAR (25), 
		price INTEGER
)
`;
};

module.exports = {
	addInventoryQueryTemplate,
	createProducTableQueryTemplate,
};
