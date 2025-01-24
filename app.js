require("dotenv").config();
const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const app = express();

// set EJS as view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); // extends the parser to include request.(body, params, qeury)
// allows serving static files from different paths
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "script")));
app.use(express.static(path.join(__dirname, "style")));
app.use("/", indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Express app listening to port: " + port);
});
