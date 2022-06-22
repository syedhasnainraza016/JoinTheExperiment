const Question = require("../../../models/Questions");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { modalClasses } = require("@mui/material");

// Register Account
const addQuestion = async (req, res) => {
  try {
    const { question, status } = req.body;
    // console.log("re", req.body);
    // Create account object
    const newQuestion = new Question({
      question: question,
      status: status,
    });

    // Save information
    const saveQuestion = await newQuestion.save();
    if (saveQuestion)
      return res.status(201).json({
        status: true,
        message: "Question Successfully Created",
      });
  } catch (error) {
    if (error) {
      return res.status(404).json({
        status: true,
        message: "Question not Created",
      });
    }
  }
};
const getAllQuestions = async (req, res) => {
  try {
    let Questions = await Question.find().exec();
    // console.log("question", Questions);
    if (Questions)
      return res.status(201).json({
        status: true,
        message: "Question Successfully Updates",
        data: Questions,
      });
  } catch (error) {
    if (error) {
      return res.status(404).json({
        status: true,
        message: "Question not Updated",
      });
    }
  }
};

const UpdateStatus = async (req, res, next) => {
  try {
    const { id, question, status } = req.body;
    // await checkId(id)
    // console.log("req", req.body);

    await Question.findByIdAndUpdate(
      { _id: id },
      { $set: { question: question, status: status } },
      { new: true }
    ).exec();

    res.status(201).json({ status: true, message: `Successfully updated` });
  } catch (error) {
    if (error) next(error);
  }
};

const deleteQuestion = async (req, res, next) => {
  try {
    let { id } = req.params;
    console.log("id", id);
    await Question.deleteOne({
      $and: [{ _id: id }],
    });
    res.status(200).json({
      status: true,
      message: "Successfully Deleted question",
    });
  } catch (error) {
    if (error) {
      res.status(501).json({
        status: false,
        message: error.message,
      });
    }
  }
};

module.exports = {
  addQuestion,
  getAllQuestions,
  UpdateStatus,
  deleteQuestion,
};
