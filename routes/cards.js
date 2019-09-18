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
  const templateData = { id, text };
  if (!side) {
    res.redirect(`/cards/${id}?side=question`);
  }
  //determines the side to show base on the value of the 'side' key
  if (side === "question") {
    templateData.hint = hint;
    templateData.sideToShowDisplay = "Answer";
    templateData.sideToShow = "answer";
  } else if (side === "answer") {
    templateData.sideToShowDisplay = "Question";
    templateData.sideToShow = "question";
  }

  res.render("card", templateData);
});

router.get("/", (req, res, next) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor(Math.random() * numberOfCards);
  res.redirect(`/cards/${flashcardId}`);
});

module.exports = router;
