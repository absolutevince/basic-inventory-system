const { Router } = require("express");
const {
	inventoryAddPost,
	inventoryGet,
	inventoryDeletePost,
} = require("../controllers/inventoryController");
const inventoryRouter = Router();

inventoryRouter.get("/:id", inventoryGet);
inventoryRouter.post("/add/:id", inventoryAddPost);
inventoryRouter.get("/delete/:id", inventoryDeletePost);

module.exports = inventoryRouter;
