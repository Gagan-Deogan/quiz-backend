const { Score } = require("../models/score.model");

const getAllScore = async (req, res) => {
  try {
    const score = await Score.find().sort(["totalScore", 1]);
  } catch (err) {
    res.status(503).json({ error: "something went wrong" });
  }
};

const updateUserTotalScore = async (req, res) => {
  try {
    const { quiz, user } = req;
    console.log(quiz);

    const { score } = req.body;
    let scorePresent = await Score.findOne({
      userId: user._id,
      quizId: quiz._id,
    });
    if (scorePresent) {
      scorePresent.score = score;
      scorePresent.save();
    } else {
      const newScore = new Score({
        userId: user._id,
        quizId: quiz._id,
        score: score,
      });
      await newScore.save();
    }
    res.status(200).json({ data: "successfull Submitted" });
  } catch (err) {
    console.log(err);
    res.status(503).json({ error: "something went wrong" });
  }
};
module.exports = { updateUserTotalScore };
