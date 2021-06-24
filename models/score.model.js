const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = Schema({
  userId: {
    type: Schema.ObjectId,
    ref: "User",
    required: "userId required",
  },
  score: {
    type: Number,
    required: "Score required",
  },
  quizId: {
    type: Schema.ObjectId,
    ref: "Quiz",
    required: "QuizId required",
  },
});

const Score = mongoose.model("Score", scoreSchema);
module.exports = { Score };
