require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

// const MongoClient = require("mongodb").MongoClient;

// let db;
// MongoClient.connect(
//   process.env.REACT_APP_DB_URL,
//   { useUnifiedTopology: true },
//   function (error, client) {
//     if (error) return console.group(error);
//     db = client.db("camp_data");
//     db.collection("user").insertOne(
//       { id: email, pw: password },
//       function (error, result) {
//         console.log("저장 완료");
//       }
//     );
//     app.listen(8080, function () {
//       console.log("listening on 8080");
//     });
//   }
// );

app.use(express.json());
const cors = require("cors");
app.use(cors());

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useMongoClient: true,
  })
  .then(() => {
    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});
