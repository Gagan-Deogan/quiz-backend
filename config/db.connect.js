const mongoose = require("mongoose");
require("dotenv").config();
const mySecret = process.env.DB_PASSWORD;
const initializeDBConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Gagandeep:${mySecret}@videolibaray.licm8.mongodb.net/quiz?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log("db connected");
  } catch (error) {
    return console.log(error);
  }
};
module.exports = { initializeDBConnection };
