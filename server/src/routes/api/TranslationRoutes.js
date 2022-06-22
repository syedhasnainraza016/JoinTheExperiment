const express = require("express");
const router = express.Router();
const TranslationController = require("../../controllers/TranslationController/TranslationController");

router.post("/add-translation", TranslationController.addTranslation);
router.post("/edit-translation", TranslationController.UpdateTranslation);
router.get("/get-translations", TranslationController.getAllTranslations);
router.delete("/del-translation/:id", TranslationController.deleteTranslation);

module.exports = router;
