const express = require("express");
const app = express();
const PORT = 3000;
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.set("view engine", "pug");

app.listen(PORT, console.log("server is up and running"));
app.get("/", (req, res, next) => {
  res.render("index");
});

// app.get("/table", (req, res, next) => {
//     res.render("table", {firstName: "Shabreya", lastName: "Bangura"});
//   });

app.get("/cards", (req, res, next) => {
  res.render("card", { prompt: "Who is buried in Grant's tomb.", hint:"Think whose tomb it might be", colors  });
});
