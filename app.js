const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //enables getting body data in JSON format
app.use(cookieParser());

app.set("view engine", "pug"); //set template engine for express server.

//import router
const mainRoutes = require("./routes");
const cardsRoutes = require("./routes/cards");

app.use(mainRoutes);
app.use('/cards', cardsRoutes);

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
