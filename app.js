const express = require("express");
const app = express();
const PORT = 3000;
app.set('view engine', 'pug')

app.listen(PORT, console.log("server is up and running"));
app.get("/", (req, res, next) => {
  res.send("<h1>Hello boy</h1>");
});

app.get("/hello", (req, res, next) => {
  res.send("<h1>Hello js boy</h1>");
});
