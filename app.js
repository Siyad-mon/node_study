// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.write(
//       "<html><h1>Home Working Perfectly!</h1><br/><form method='POST'> <input type='text' name='message'/> <button type='submit'>Submit</button> </form></html>"
//     );
//     if (method === "POST") {
//       const body = [];

//       req.on("data", (chunk) => {
//         body.push(chunk);
//       });

//       req.on("end", () => {
//         const parsedBody = Buffer.concat(body).toString();
//         const msg = parsedBody.split("=")[1];
//         fs.writeFile("message.txt", msg, (err) => {
//           if (err) {
//             console.error(err);
//             res.statusCode = 500;
//             res.end("Error occurred while writing the file");
//           } else {
//             res.statusCode = 302;
//             res.setHeader("Location", "/");
//             return res.end();
//           }
//         });
//       });
//     } else {
//       res.end();
//     }
//   }
// });

// server.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

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

// app.use("/", (req, res, next) => {
//   res.send("<html><h1>home page</h1></html>");
//   next();
// });

const studyRoutes = require("./routes/routingStudy");
const htmlAdd = require("./routes/htmlAdd");
const shopRoutes = require("./routes/shop");
const tokenStudy = require("./routes/token");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", studyRoutes);
app.use("/admin", htmlAdd);
app.use("/shop", shopRoutes);
app.use("/", tokenStudy);

app.set("view engine", "pug");
app.set("views", "views");

app.listen(3001);
