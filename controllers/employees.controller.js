const express = require("express");
const router = express.Router();

const db = require("../db/connection");

router.get("/database/db_test", (req, res) => {
  db.query("select * from student")
    .then((data) => {
      console.log(typeof data);
      return res.send(data);
    })
    .catch((err) => console.log("error in fetching data from student", +err));
});

module.exports = router;
