const { Router } = require("express");
const {
	indexHomepageGet,
	indexCreateInventoryPost,
	indexRemoveInventoryPost,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexHomepageGet);
indexRouter.post("/create", indexCreateInventoryPost);
indexRouter.post("/delete/:id", indexRemoveInventoryPost);

module.exports = indexRouter;
