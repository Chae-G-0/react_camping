const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { User } = require("./schema");
const { Board } = require("./schema");

// jwt
const createJWT = (id) => {
  const secretKey = "secretKey";
  const access_token = jwt.sign(
    {
      token_type: "access",
      id: id,
    },
    secretKey,
    {
      issuer: id,
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
  console.log("회원가입 완료");
});

// 로그인
router.post("/api/signin", (req, res) => {
  const id = { id: req.body.id };
  const password = {
    password: crypto
      .createHash("sha512")
      .update(req.body.password)
      .digest("base64"),
  };
  User.findOne(id)
    .then((result) => {
      if (result === null) {
        res.status(404).send(console.log("아이디 불일치"));
      } else {
        User.findOne(password).then((result) => {
          if (result === null) {
            res.status(400).send(console.log("비밀번호 불일치"));
          } else {
            const access_token = createJWT(req.body.id);
            res.json({
              ACCESS_TOKEN: access_token,
              id: req.body.id,
            });
          }
        });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

// user 데이터 가져오기
router.get("/api/userdata", async (req, res) => {
  try {
    const userData = await User.findOne(req.body.id);
    res.json(userData);
  } catch (err) {
    console.error(err);
  }
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

// 게시글 수정
router.put("/api/boardupdate", async (req, res) => {
  const dataId = { _id: req.body._id };
  await Board.updateOne(dataId, req.body);
});

// 게시글 삭제
router.delete("/api/boarddelete", async (req, res) => {
  await Board.deleteOne({ _id: req.body._id });
});

module.exports = router;
