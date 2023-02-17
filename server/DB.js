require("dotenv").config();

const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserInfo = new Schema({
  email: String,
  password: String,
});

const Board = new Schema({
  author: string,
  content: string,
});
