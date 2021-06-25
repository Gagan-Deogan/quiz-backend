const express = require("express");
const router = express.Router();
const { updateUserScore } = require("../controllers/score.controller");
const { authenticate } = require("../config/passport");
const { getQuizById } = require("../params/params");
router.use(authenticate);

router.param("quizId", getQuizById);
router.post("/:quizId", updateUserScore);

module.exports = router;
