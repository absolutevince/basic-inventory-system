const { Router } = require("express");
const {
	indexHomepageGet,
	indexCreateInventoryPost,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexHomepageGet);
indexRouter.post("/create", indexCreateInventoryPost);

module.exports = indexRouter;
