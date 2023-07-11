const express = require("express");
const router = express.Router();

router.get("/books", (req, res, next) => {
  res.render("book");
  next();
});
module.exports = router;
