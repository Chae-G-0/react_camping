const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://gy1024:rkdud4020@cluster0.oemqahq.mongodb.net/camp_data?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connet");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 10,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 8,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const boardSchema = new mongoose.Schema({
  id: Number,
  author: String,
  title: String,
  content: String,
});

const User = mongoose.model("User", userSchema, "User");
const Board = mongoose.model("Board", boardSchema, "Borad");

module.exports = { User, Board };
