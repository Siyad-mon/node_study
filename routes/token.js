const express = require("express");

const router = express.Router();

const tokenFun = (req, res, next) => {
  console.log("token initiated");
  setTimeout(() => {
    const TOKEN = 123;
    req.token = TOKEN;
    next();
  }, 1000);
};

const validation = (req, res, next) => {
  if (req.token) {
    console.log("Token Approved");
  }
  next();
};

const middleware = [tokenFun, validation];
router.get("/token", middleware, (req, res, next) => {
  console.log("user logged");
  res.send("<h1>Success!</h1>");
});

module.exports = router;
