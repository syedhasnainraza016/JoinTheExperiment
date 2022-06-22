const { Schema, model } = require("mongoose");

const answerSchema = new Schema(
  {
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Answer = model("Answer", answerSchema);

module.exports = Answer;
