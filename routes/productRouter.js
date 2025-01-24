const { Router } = require("express");
const productController = require("../controllers/productController");

const productRouter = Router();

productRouter.get("/", productController.getProductsGet);

productRouter.get("/add", productController.addProductGet);

productRouter.post("/add", productController.addProductPost);

module.exports = productRouter;
