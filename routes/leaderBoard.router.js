const express = require("express");
const { authenticate } = require("../config/passport");
const { getLeaderBoard } = require("../controllers/leaderBoard.controller");
const router = express.Router();

router.use(authenticate);
router.get("/", getLeaderBoard);

module.exports = router;
