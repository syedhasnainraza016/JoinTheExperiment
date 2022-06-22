const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
  {
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
