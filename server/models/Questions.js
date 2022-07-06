const { Schema, model } = require("mongoose");
const shortid = require("shortid");

const questionSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Number,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: false,
      trim: true,
    },
    rating_avg: {
      type: Number,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Question = model("Question", questionSchema);

module.exports = Question;
