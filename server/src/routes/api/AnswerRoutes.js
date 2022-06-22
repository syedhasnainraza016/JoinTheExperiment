const express = require("express");
const router = express.Router();
const AnswerController = require("../../controllers/AnswerController/AnswerController");

router.post("/add-answer", AnswerController.addAnswer);
module.exports = router;
