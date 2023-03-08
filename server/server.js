require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
// express에 기본으로 body-parser 설치되어 있다고함 지우기
const bodyParser = require("body-parser");
const router = require("./router");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
const cors = require("cors");
app.use(cors());

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://gy1024:rkdud4020@cluster0.oemqahq.mongodb.net/camp_data?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// auth
app.post("/signup", router);
app.post("/signin", router);
app.post("/verify", router);

// board
app.get("/board", router)
app.post("/board", router)
app.put("/boardupdate", router)
app.delete("/boarddelete", router)

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
