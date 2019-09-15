const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //enables getting body data in JSON format
app.use(cookieParser());

app.set("view engine", "pug"); //set template engine for express server.

//handles request to home URL
app.get("/", (req, res, next) => {
  let name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  } else {
    res.redirect("/hello");
  }
});

//handles get request to URL: /hello
app.get("/hello", (req, res, next) => {
  res.render("hello", { name: req.cookies.username });
});

//handles submit name button.
app.post("/hello", (req, res, next) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

//handles goodbye button submit action
app.post("/goodbye", (req, res, next) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

//handles request to path: /cards
app.get("/cards", (req, res, next) => {
  res.render("card", {
    prompt: "Who is buried in Grant's tomb.",
    hint: "Think whose tomb it might be",
    colors
  });
});

//error handling middle ware
app.use((req, res, next) => {
  console.log("Hello");
  const err = new Error("Oh Noooo!!!");
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(PORT, console.log("server is up and running"));
