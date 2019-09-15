const express = require("express");
const router = express.Router();

//handles request to path: /cards
router.get('/', (req, res, next) => {
    res.render("card", {
      prompt: "Who is buried in Grant's tomb."
    });
  });

  module.exports = router;