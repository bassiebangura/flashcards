const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, console.log("server is up and running"));
app.get("/", (req, res, next) => {
  res.send("Hello Boy!!")
} )