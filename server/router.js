const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { User } = require("./schema");
const { Board } = require("./schema");

const createJWT = () => {
  const secretKey = "secretkey";
  const accessToken = jwt.sign(
    {
      token_type: "access",
      email: email,
      name: name,
    },
    secretKey,
    {
      issuer: "issuer",
      expiresIn: "5m",
      subject: "access",
    }
  );
  return accessToken;
};

router.post("/api/signup", async (req, res) => {
  req.body.password = crypto
    .createHash("sha512")
    .update(req.body.password)
    .digest("base64");
  await User.insertMany(req.body);
  res.send("signup");
});

router.post("/api/signin", (req, res) => {
  let email = { email: req.body.email };
  let password = {
    password: crypto
      .createHash("sha512")
      .update(req.body.password)
      .digest("base64"),
  };
  let signupAuth = Object.assign(email, password);
  User.findOne(
    email.then((result) => {
      if (result === null) {
        alert("아이디 불일치");
      } else {
        User.findOne(signupAuth).then((result) => {
          if (result === null) {
            alert("비밀번호 불일치");
          } else {
            const token = createJWT(req.body.email, result.email);
            res.send({
              ACCESS_TOKEN: token,
            });
          }
        });
      }
    })
  );
});

router.post("/api/verify", (req, res) => {
  const token = req.headers["authorization"];
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) {
      res.send({
        RESULT: false,
        DATA: "none",
      });
    } else {
      res.send({
        RESULT: true,
        DATA: decoded.userId,
      });
    }
  });
});

router.post("/api/board", async (req, res) => {
  await Board.insertMany(req.body);
  res.send("board");
});

router.get("/api/board", async (req, res) => {
  try {
    const boardlist = await Board.find({});
    res.json(boardlist)
    res.send("게시판");
  } catch (err) {
    console.error(err)
  }
});

module.exports = router;
