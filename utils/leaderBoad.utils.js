const { LeaderBoard } = require("../models/leaderBoard.model");
const { Score } = require("../models/score.model");

const totalScoreCalculator = (userScores) => {
  const reducer = (acc, val) => {
    return (acc = acc + val.score);
  };
  return userScores.reduce(reducer, 0);
};

const updateLeaderBoard = async (userId) => {
  try {
    const userScores = await Score.find({ userId }).lean();
    if (!userScores) {
      throw ERROR("somethin went wrong");
    }
    const totalScore = totalScoreCalculator(userScores);
    let totalScorePresent = await LeaderBoard.findOne({ userId });

    if (totalScorePresent) {
      totalScorePresent.totalScore = totalScore;
      totalScorePresent.save();
    } else {
      const newUserTotalScore = new LeaderBoard({
        userId,
        totalScore,
      });
      await newUserTotalScore.save();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateLeaderBoard };
