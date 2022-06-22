const express = require("express");
const router = express.Router();
const QuestionController = require("../../controllers/QuestionController/QuestionController");

router.post("/add-question", QuestionController.addQuestion);
router.post("/edit-question", QuestionController.UpdateStatus);
router.get("/get-questions", QuestionController.getAllQuestions);
router.delete("/del-question/:id", QuestionController.deleteQuestion);

module.exports = router;
