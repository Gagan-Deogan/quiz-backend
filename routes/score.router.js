const express = require("express");
const router = express.Router();
const { updateUserTotalScore } = require("../controllers/score.controller");
const { authenticate } = require("../config/passport");
const { getQuizById } = require("../params/params");
router.use(authenticate);

router.param("quizId", getQuizById);
router.post("/:quizId", updateUserTotalScore);

module.exports = router;
