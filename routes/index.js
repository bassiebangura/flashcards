const express = require("express");
const router = express.Router();
//handles request to home URL
router.get("/", (req, res, next) => {
  let name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  } else {
    res.redirect("/hello");
  }
});

//handles get request to URL: /hello
router.get("/hello", (req, res, next) => {
  res.render("hello", { name: req.cookies.username });
});

//handles submit name button.
router.post("/hello", (req, res, next) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

//handles goodbye button submit action
router.post("/goodbye", (req, res, next) => {
  res.clearCookie("username");
  res.redirect("/hello");
});



module.exports = router;
