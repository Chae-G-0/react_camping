import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpBox = styled.div`
  width: 400px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  p {
    font-size: 21px;
    margin: 0 0 50px 0;
    color: #777;
  }
  label {
    text-align: left;
    font-size: 19px;
    font-weight: 500;
    margin: 0 0 15px 0;
  }
  input,
  button {
    padding: 10px 15px;
    font-size: 17px;
    margin: 0 0 30px 0;
    cursor: pointer;
  }
  input:focus {
    border: 2px solid #000;
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();
  return (
    <SignUpBox>
      <p>회원가입 페이지 입니다.</p>
      <label htmlFor="id">아이디</label>
      <input
        data-testid="email-input"
        placeholder="이메일을 입력해 주세요."
        id="id"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        data-testid="password-input"
        placeholder="비밀번호를 8자 이상 입력해주세요."
        id="password"
        onChange={(e) => {
          setPassWord(e.target.value);
        }}
      />
      <button
        data-testid="signup-button"
        disabled="disabled"
        onClick={() => {
          navigate("/signin");
        }}
      >
        회원가입
      </button>
    </SignUpBox>
  );
};

export default Signup;
