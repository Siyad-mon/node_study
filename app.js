const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql2");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/product-test", (req, res, next) => {
  res.send(
    "<form method='POST' action='/product'><input type='text' name='title'/></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  next();
});

app.get("/", (req, res) => {
  return res.json("From backend side");
});

const studyRoutes = require("./routes/routingStudy");
const htmlAdd = require("./routes/htmlAdd");
const shopRoutes = require("./routes/shop");
const tokenStudy = require("./routes/token");
const bookRoutes = require("./routes/books");
const dbtest = require("./controllers/employees.controller");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", studyRoutes);
app.use("/admin", htmlAdd);
app.use("/shop", shopRoutes);
app.use("/", tokenStudy);
app.use("/", bookRoutes);
app.use("/", dbtest);
app.set("view engine", "ejs");
app.set("views", "views");

const PORT = process.env.PORT || 3001;
app.listen(PORT);
