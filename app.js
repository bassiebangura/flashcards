const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const PORT = 3000;
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

app.set("view engine", "pug");

app.listen(PORT, console.log("server is up and running"));
app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/hello", (req, res, next) => {
  res.render("hello", { name: req.cookies.username });
});

app.post("/hello", (req, res, next) => {
  res.cookie("username", req.body.username);
  res.render("hello", { name: req.body.username });
});

app.get("/cards", (req, res, next) => {
  res.render("card", {
    prompt: "Who is buried in Grant's tomb.",
    hint: "Think whose tomb it might be",
    colors
  });
});
