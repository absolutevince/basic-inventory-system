require("dotenv").config();
const pool = require("../db/pool");

const invNamesTable = process.env.INV_NAMES_TABLE;
const addInventoryQueryTemplate = (name) => {
	return `
	INSERT INTO ${invNamesTable} (name, type) VALUES ('${name}', 'inventory')
`;
};

const createProducTableQueryTemplate = (name) => {
	return `
		CREATE TABLE IF NOT EXISTS ${name} (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
		name VARCHAR (25), 
		inventory INTEGER, 
		price INTEGER
)
`;
};

module.exports = {
	addInventoryQueryTemplate,
	createProducTableQueryTemplate,
};
