const Translate = require("../../../models/Translate");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const addTranslation = async (req, res) => {
  try {
    const { text, translate, language } = req.body;
    console.log("re", req.body);
    // Create account object
    const newTranslate = new Translate({
      text: text,
      translate: translate,
      language: language,
    });

    // Save information
    const saveTranslate = await newTranslate.save();
    if (saveTranslate)
      return res.status(201).json({
        status: true,
        message: "Translation Successfully Created",
      });
  } catch (error) {
    if (error) {
      return res.status(404).json({
        status: true,
        message: "Translation not Created",
      });
    }
  }
};
const getAllTranslations = async (req, res) => {
  try {
    let Translations = await Translate.find().exec();
    // console.log("question", Questions);
    if (Translations)
      return res.status(201).json({
        status: true,
        message: "Translations Successfully Found",
        data: Translations,
      });
  } catch (error) {
    if (error) {
      return res.status(404).json({
        status: true,
        message: "Translations not Found",
      });
    }
  }
};

const UpdateTranslation = async (req, res, next) => {
  try {
    const { id, text, translate, language } = req.body;
    // await checkId(id)
    // console.log("req", req.body);

    await Translate.findByIdAndUpdate(
      { _id: id },
      { $set: { text: text, translate: translate, language: language } },
      { new: true }
    ).exec();

    res.status(201).json({ status: true, message: `Successfully updated` });
  } catch (error) {
    if (error) next(error);
  }
};

const deleteTranslation = async (req, res, next) => {
  try {
    let { id } = req.params;
    console.log("id", id);
    await Translate.deleteOne({
      $and: [{ _id: id }],
    });
    res.status(200).json({
      status: true,
      message: "Successfully Deleted",
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
  addTranslation,
  getAllTranslations,
  UpdateTranslation,
  deleteTranslation,
};
