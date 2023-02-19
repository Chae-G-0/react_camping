const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto")
const { User } = require("user");

const createJWT = () => {
  const secretKey = "secretkey";
  const token = jwt.sign(
    {
      token_type: "access",
      email: email,
      name: nane,
    },
    secretKey,
    {
      issuer: "issuer",
      expiresIn: "10m",
      subject: "access",
    }
  );
};

router.post("/signup", async (req, res) => {
    req.body.password = crypto.createHash('sha512').update(req.body.password).digest('base64');
    await User.insertMany(req.body);
    res.send("signup")
});

router.post("/signin", (req, res) => {
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    if (!userInfo) {
      return res.json({
        loginSuccess: false,
        message: "이메일에 해당하는 회원이 존재하지 않습니다.",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      }
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
      });
    });
  });
});