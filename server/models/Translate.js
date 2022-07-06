const { Schema, model } = require("mongoose");

const translateSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    translate: {
      type: String,
      required: true,
      trim: true,
    },
    language: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Translate = model("Translate", translateSchema);

module.exports = Translate;
