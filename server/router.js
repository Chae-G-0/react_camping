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

router.post("/signup", async (req, res) => {
  req.body.password = crypto
    .createHash("sha512")
    .update(req.body.password)
    .digest("base64");
  await User.insertMany(req.body);
  res.send("signup");
});

router.post("/signin", (req, res) => {
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

router.post("/verify", (req, res) => {
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

router.post("/board", async (req, res) => {
  await Board.insertMany(req.body)
  res.send("board")
});

router.get("/board", async (req, res) => {
  await Board.find(req.body)
  res.send("boardlist")
});

module.exports = router;
