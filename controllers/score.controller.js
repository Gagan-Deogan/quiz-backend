const { Score } = require("../models/score.model");
const { updateLeaderBoard } = require("../utils/leaderBoad.utils");

const updateUserScore = async (req, res) => {
  try {
    const { quiz, user } = req;

    const { score } = req.body;
    let scorePresent = await Score.findOne({
      userId: user._id,
      quizId: quiz._id,
    });
    if (scorePresent) {
      scorePresent.score = score;
      await scorePresent.save();
    } else {
      const newScore = new Score({
        userId: user._id,
        quizId: quiz._id,
        score: score,
      });
      await newScore.save();
    }
    updateLeaderBoard(user._id);
    res.status(200).json({ data: "successfull Submitted" });
  } catch (err) {
    console.log(err);
    res.status(503).json({ error: "something went wrong" });
  }
};
module.exports = { updateUserScore };
