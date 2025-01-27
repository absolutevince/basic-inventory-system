const renderIndexView = require("../utils/renderIndexView");

const errorHandler = async (err, req, res, next) => {
	console.log(err);
	renderIndexView(res, err);
};

module.exports = errorHandler;
