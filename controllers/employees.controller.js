const express = require("express");
const router = express.Router();

const db = require("../db/connection");

router.get("/database/db_test", (req, res) => {
  // db.execute("delete from student where id=17");
  // db.execute(
  //   'insert into student (name,age,gender) values ("rincy",18,"female")'
  // );
  // db.execute("update student set id = 6 where name = 'rincy'");
  db.query("select * from student")

    .then((data) => {
      return res.send(data[0]);
    })
    .catch((err) => console.log("error in fetching data from student", +err));
});

module.exports = router;
