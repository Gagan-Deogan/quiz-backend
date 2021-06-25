const { LeaderBoard } = require("../models/leaderBoard.model");

const getLeaderBoard = async (req, res) => {
  try {
    const leaderBoard = await LeaderBoard.find()
      .populate({ path: "userId", select: "username" })
      .sort({ totalScore: "desc" })
      .limit(20);
    res.status(200).json({ data: leaderBoard });
  } catch (err) {
    console.log(err);
    res.status(503).json({ data: "Something went wrong" });
  }
};

module.exports = { getLeaderBoard };
