const { Quiz } = require("../models/quiz.model");

const getQuizById = async (req, res, next, quizId) => {
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      throw ERROR("Invalid Quiz id");
    }
    req.quiz = quiz;
    next();
  } catch (err) {
    console.log(err);
    res.status(503).json({ error: "Something went worng" });
  }
};

module.exports = { getQuizById };
