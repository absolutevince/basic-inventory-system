require("dotenv").config();
const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const productRouter = require("./routes/productRouter");

const app = express();

// set EJS as view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); // extends the parser to include request.(body, params, qeury)
app.use(express.static(path.join(__dirname, "public"))); // allows serving static files, like css files, images etc.

app.use("/", indexRouter);

app.use("/product", productRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Express app listening to port: " + port);
});
