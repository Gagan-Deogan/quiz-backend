const { Quiz } = require("../models/quiz.model");

const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    res.status(200).json({ data: quizzes });
  } catch (err) {
    res.status(503).json({ error: "Something went worng" });
  }
};

module.exports = { getQuizzes };
