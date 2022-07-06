const express = require("express");
const authRoutes = require("./AuthRoutes");
const QuestionRoutes = require("./QuestionRoutes");
const AnswerRoutes = require("./AnswerRoutes");
const TranslationRoutes = require("./TranslationRoutes");

let router = express.Router();

router.use("/auth", authRoutes);
router.use("/question", QuestionRoutes);
router.use("/answer", AnswerRoutes);
router.use("/translation", TranslationRoutes);

module.exports = router;
