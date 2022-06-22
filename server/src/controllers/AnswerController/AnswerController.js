const Answer = require("../../../models/Answers");

// Register Account
const addAnswer = async (req, res) => {
  try {
    const { questionId, userId, answer } = req.body;

    // Create account object
    const newAnswer = new Answer({
      questionId: questionId,
      userId: userId,
      answer: answer,
    });

    // Save information
    const saveAnswer = await newAnswer.save();
    if (saveAnswer)
      return res.status(201).json({
        status: true,
        message: "Answer Added Successfully",
      });
  } catch (error) {
    if (error) next(error);
  }
};

const viewAllAnswers = async (req, res) => {
  try {
    let { questionId } = req.params;
    let Answers = await Answer.findAll({ questionId: questionId }).exec();
  } catch {
    res.status(404);
  }
};

module.exports = {
  viewAllAnswers,
  addAnswer,
};
