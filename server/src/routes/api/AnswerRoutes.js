const express = require("express");
const router = express.Router();
const AnswerController = require("../../controllers/AnswerController/AnswerController");

router.post("/add-answer", AnswerController.addAnswer);
router.get("/view-answers/:questionId", AnswerController.viewAllAnswers);
module.exports = router;
