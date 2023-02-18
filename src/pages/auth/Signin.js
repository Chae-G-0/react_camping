import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInBox = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 21px;
    line-height: 100px;
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

const SignIn = () => {
  const idInput = useRef();
  const pwInput = useRef();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    id: "",
    password: "",
  });
  const handleLogInState = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (loginForm.id.length < 1) {
      idInput.current.focus();
      return;
    }
    if (loginForm.password.length < 8) {
      pwInput.current.focus();
      return;
    }
    navigate("/");
  };
  return (
    <SignInBox>
      <h2>로그인 페이지 입니다.</h2>
      <label htmlFor="id">아이디</label>
      <input
        ref={idInput}
        data-testid="email-input"
        placeholder="아이디를 입력해 주세요."
        id="id"
        onChange={(e) => {
          handleLogInState(e);
          console.log();
        }}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        ref={pwInput}
        type="password"
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요."
        id="password"
        onChange={(e) => {
          handleLogInState(e);
        }}
      />
      <button
        data-testid="signup-button"
        onClick={() => {
          handleSubmit();
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </button>
    </SignInBox>
  );
};

export default SignIn;
