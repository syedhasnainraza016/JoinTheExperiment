const Question = require("../../../models/Questions");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let baseURL = "http://localhost:3000/question/";
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
    if (saveQuestion) {
      let Qid = saveQuestion._id;
      let url = `${baseURL}${saveQuestion._id}`;
      let QLink = await Question.findByIdAndUpdate(
        { _id: Qid },
        { $set: { link: url } },
        { new: true }
      ).exec();
      // console.log("QLink", QLink);
      return res.status(201).json({
        status: true,
        message: "Question Successfully Created",
      });
    }
    return res.status(200).json({
      status: false,
      message: "Not Created",
    });
  } catch (error) {
    if (error) {
      return res.status(404).json({
        status: false,
        message: "Question not Created",
      });
    }
  }
};
const getAllQuestions = async (req, res) => {
  try {
    let Questions = await Question.find().exec();
    // console.log("question", Questions);
    if (Questions) {
      return res.status(201).json({
        status: true,
        message: "Question Successfully Found",
        data: Questions,
      });
    }
    return res.status(200).json({
      status: false,
      message: "Not Found",
    });
  } catch (error) {
    if (error) {
      return res.status(404).json({
        status: true,
        message: "Question not Found",
      });
    }
  }
};

const UpdateStatus = async (req, res) => {
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
    if (error) {
      return res.status(404).json({
        status: false,
        message: "Network Error",
      });
    }
  }
};

const deleteQuestion = async (req, res) => {
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
const getQuestionById = async (req, res) => {
  try {
    let { questionId } = req.params;
    // console.log("id", req.params);
    let question = await Question.findOne({ _id: questionId });
    // console.log("quesition", question);
    if (question) {
      return res.status(200).json({
        status: true,
        message: "Successfully found question",
        data: question,
      });
    }
    return res.status(200).json({
      status: false,
      message: "Question not found",
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
  getQuestionById,
};
