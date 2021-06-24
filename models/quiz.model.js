const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Option = Schema({
  answer: {
    type: String,
    required: "Option answer Required",
  },
  isRight: {
    type: Boolean,
    required: "Option isRight Required",
  },
});

const Question = Schema({
  text: {
    type: String,
    required: "Question text Required",
  },
  points: {
    type: Number,
    required: "Question points Required",
  },
  negativePoint: {
    type: Number,
    default: 0,
  },
  options: [Option],
});

const QuizSchema = Schema({
  name: {
    type: String,
    required: "Quiz Name Required",
  },
  difficult: {
    type: String,
    enum: ["HARD", "EASY", "MEDIUM"],
    required: "Quiz difficult Required",
  },
  thumbnail: {
    type: String,
    // required: "Quiz thumbnail Required",
  },
  questions: [Question],
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = { Quiz };
