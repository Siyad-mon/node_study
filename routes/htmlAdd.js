const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/html-add", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "sample.html"));
});

module.exports = router;
