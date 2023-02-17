import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpBox = styled.div`
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

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);

  const regx = new RegExp(
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  const handleSignUpState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.id]: e.target.value,
    });
  };
  const authBtn = () => {
    regx.test(signUpForm.email) && signUpForm.password.length >= 8
      ? setBtnDisabled(false)
      : setBtnDisabled(true);
  };
  useEffect(() => {
    authBtn();
  }, [signUpForm]);
  return (
    <SignUpBox>
      <h2>회원가입 페이지 입니다.</h2>
      <label htmlFor="email">아이디</label>
      <input
        type="email"
        data-testid="email-input"
        placeholder="이메일을 입력해 주세요."
        id="email"
        onChange={(e) => {
          authBtn();
          handleSignUpState(e);
        }}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        data-testid="password-input"
        placeholder="비밀번호를 8자 이상 입력해주세요."
        id="password"
        onChange={(e) => {
          authBtn();
          handleSignUpState(e);
        }}
      />
      <button
        type="submit"
        data-testid="signup-button"
        disabled={btnDisabled}
        onClick={() => {
          navigate("/signin");
        }}
      >
        회원가입
      </button>
    </SignUpBox>
  );
};

export default SignUp;
