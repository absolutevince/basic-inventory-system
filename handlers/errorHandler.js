const renderIndexView = require("../utils/renderIndexView");

const errorHandler = async (err, req, res, next) => {
	renderIndexView(res, err);
};

module.exports = errorHandler;
