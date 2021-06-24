const express = require("express");
const bodyParser = require("body-parser");
const { initializeDBConnection } = require("./config/db.connect");
const passport = require("passport");
const cors = require("cors");
const app = express();
const { initialize } = require("./config/passport");
const users = require("./routes/users.router");
const scores = require("./routes/score.router");
const quizzes = require("./routes/quizzes.router");
initializeDBConnection();

const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(initialize());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use("/users", users);
app.use("/quizzes", quizzes);
app.use("/scores", scores);

app.use((err, req, res, next) => {
  res.status(503).json({
    success: false,
    error: "Something went wrong",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "route not found on server, please check",
  });
});

app.listen(PORT, () => {
  console.log("server started on port: ", PORT);
});
