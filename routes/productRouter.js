const { Router } = require("express");
const productController = require("../controllers/productController");

const productRouter = Router();

productRouter.get("/", productController.getProducts);

productRouter.get("/add", productController.addProductGet);

productRouter.post("/add", productController.addProductPost);

module.exports = productRouter;
