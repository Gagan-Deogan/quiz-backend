const express = require("express");
const { authenticate } = require("../config/passport");
const { Quiz } = require("../models/quiz.model");
const { getQuizzes } = require("../controllers/quiz.controller");
const router = express.Router();

router.use(authenticate);

router.get("/", getQuizzes);
router.post("/", async (req, res) => {
  try {
    const { quiz } = req.body;
    const newQuiz = new Quiz(quiz);
    await newQuiz.save();
    res.status(200).json({ data: "Successfully Save" });
  } catch (err) {
    res.status(503).json({ error: "Something went worng" });
  }
});

module.exports = router;
