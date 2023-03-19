const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { User } = require("./schema");
const { Board } = require("./schema");

// jwt
const createJWT = () => {
  const secretKey = "secretkey";
  const access_token = jwt.sign(
    {
      token_type: "access",
      // email: email,
    },
    secretKey,
    {
      expiresIn: "5m",
      subject: "access",
    }
  );
  return access_token;
};

// 회원가입
router.post("/api/signup", async (req, res) => {
  req.body.password = crypto
    .createHash("sha512")
    .update(req.body.password)
    .digest("base64");
  await User.insertMany(req.body);
  res.send("signup");
});

// 로그인
router.post("/api/signin", (req, res) => {
  const email = { email: req.body.email };
  const password = {
    password: crypto
      .createHash("sha512")
      .update(req.body.password)
      .digest("base64"),
  };
  const Auth = Object.assign(email, password);
  User.findOne(email)
    .then((result) => {
      if (result === null) {
        res.status(404).send(console.log("아이디 불일치"));
      } else {
        User.findOne(Auth).then((result) => {
          if (result === null) {
            res.status(400).send(console.log("비밀번호 불일치"));
          } else {
            const access_token = createJWT();
            res.json({
              ACCESS_TOKEN: access_token,
            });
          }
        });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/api/verify", (req, res) => {
  const token = req.headers["authorization"];
  jwt.verify(token, "secretkey", (error, decoded) => {
    if (error) {
      res.send({
        RESULT: false,
        DATA: "none",
      });
    } else {
      res.send({
        RESULT: true,
        DATA: decoded.email,
      });
    }
  });
});

// 게시판 등록
router.post("/api/board", async (req, res) => {
  await Board.insertMany(req.body);
  res.send("board");
});

// 게시판 데이터 가져오기
router.get("/api/boardlist", async (req, res) => {
  try {
    const boardlist = await Board.find({});
    res.json(boardlist);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
