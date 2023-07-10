const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res
    .status()
    .send(
      '<form method="POST" action="/router-test"><input type="text" name="name"/></form>'
    );
});

router.get((req, res, next) => {
  console.log(req.body);
});

module.exports = router;
