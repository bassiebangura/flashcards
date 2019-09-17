const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data;
//handles request to path: /cards
router.get("/:id", (req, res, next) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { text };
  if (side === "question") {
    templateData.hint = hint;
    templateData.toggleAnswerAndQuestion = "Answer";
  } else {
    templateData.toggleAnswerAndQuestion = "Question";
  }
  res.render("card", templateData);
});

module.exports = router;
