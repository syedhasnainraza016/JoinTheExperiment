const Answer = require("../../../models/Answers");
const User = require("../../../models/Users");

const addAnswer = async (req, res) => {
  try {
    const { questionId, userName, phone, answer } = req.body;
    // console.log("eq", req.body);
    // Create account object
    const newAnswer = new Answer({
      questionId: questionId,
      userName: userName,
      phone: phone,
      answer: answer,
    });

    // Save information
    const saveAnswer = await newAnswer.save();
    if (saveAnswer) {
      return res.status(201).json({
        status: true,
        message: "Answer Added Successfully",
      });
    }
    return res.status(200).json({
      status: false,
      message: "Answer Not Created",
    });
  } catch (error) {
    if (error) {
      return res.status(404).json({
        status: false,
        message: "Network Error",
      });
    }
  }
};

const viewAllAnswers = async (req, res) => {
  try {
    let { questionId } = req.params;

    // console.log("questionId", questionId);
    let Answers = await Answer.find({ questionId: questionId }).exec();
    if (Answers.length > 0) {
      return res.status(200).json({
        status: true,
        message: "Answers Found Successfully",
        data: Answers,
      });

      // let AllAnswers;
      // for (i = 0; i < Answers.length; i++) {
      //   let uId = Answers[i].userId;
      //   let user = await User.findOne({ _id: uId }).exec();
      //   let newAnswer = Answers[i].toObject();
      //   newAnswer.userEmail = user.email;
      //   Answers[i] = newAnswer;
      //   // console.log("newAnswer", newAnswer);
      //   // console.log("Answers[i]", Answers[i]);

      //   if (i == Answers.length - 1) {
      //     return res.status(200).json({
      //       status: true,
      //       message: "Answers Found Successfully",
      //       data: Answers,
      //     });
      //   }
      //   // return res.status(200).json({
      //   //   status: false,
      //   //   message: "Answers Not Found",
      //   //   data: [],
      //   // });
      //   // console.log("User", user);
      // }
    } else {
      return res.status(200).json({
        status: false,
        message: "Answers Not found",
        data: [],
      });
    }
    // console.log("answers", Answers);
  } catch {
    res.status(404);
  }
};

const RateAnAnswer = async (req, res) => {
  try {
    let array = req.body;
    // console.log("array", array);
    if (array.length) {
      for (let i = 0; i < array.length; i++) {
        let answerId = array[i];
        let answer = await Answer.findByIdAndUpdate(
          { _id: answerId },
          { $inc: { rating: +1 } },
          { new: true }
        ).exec();
        if (i == array.length - 1) {
          return res.status(201).json({
            status: true,
            message: "Answer Rating Successfully",
          });
        }
      }
    }
    // if (answer) {
    //   return res.status(201).json({
    //     status: true,
    //     message: "Answer Rating Successfully",
    //   });
    // }
    return res.status(200).json({
      status: false,
      message: "Answer Not Rated",
    });
  } catch {}
};

module.exports = {
  viewAllAnswers,
  addAnswer,
  RateAnAnswer,
};
