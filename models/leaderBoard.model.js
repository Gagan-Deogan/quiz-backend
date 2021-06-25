const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = Schema({
  userId: {
    type: Schema.ObjectId,
    ref: "User",
    required: "userId required",
  },
  totalScore: {
    type: Number,
    required: "TOtal score required",
  },
});

const LeaderBoard = mongoose.model("LeaderBoard", leaderSchema);

module.exports = { LeaderBoard };
