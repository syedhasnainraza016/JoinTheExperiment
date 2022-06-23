const Answer = require("../../../models/Answers");
const User = require("../../../models/Users");

const addAnswer = async (req, res) => {
  try {
    const { questionId, userId, answer } = req.body;
    console.log("eq", req.body);
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

    console.log("questionId", questionId);
    let Answers = await Answer.find({ questionId: questionId }).exec();
    // let AllAnswers;
    for (i = 0; i < Answers.length; i++) {
      let uId = Answers[i].userId;
      let user = await User.findOne({ _id: uId }).exec();
      let newAnswer = Answers[i].toObject();
      newAnswer.userEmail = user.email;
      Answers[i] = newAnswer;
      console.log("newAnswer", newAnswer);
      console.log("Answers[i]", Answers[i]);

      if (i == Answers.length - 1) {
        return res.status(200).json({
          status: true,
          message: "Answers Found Successfully",
          data: Answers,
        });
      }

      // console.log("User", user);
    }
    console.log("answers", Answers);
  } catch {
    res.status(404);
  }
};

module.exports = {
  viewAllAnswers,
  addAnswer,
};
