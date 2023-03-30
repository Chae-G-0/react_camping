import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    id: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleSignUpState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const userInfo = {
      id: signUpForm.id,
      password: signUpForm.password,
    };
    try {
      axios.post("/api/signup", userInfo);
      alert("회원가입이 완료되었습니다.");
      navigate("/signin", { replace: true });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("이미 사용중인 아이디입니다.");
        signUpForm.email("");
        return;
      }
    }
  };

  const authBtn = () => {
    signUpForm.id.length >= 5 && signUpForm.password.length >= 8
      ? setBtnDisabled(false)
      : setBtnDisabled(true);
  };

  useEffect(() => {
    authBtn();
  }, [signUpForm]);
  
  return (
    <SignUpBox>
      <h2>회원가입 페이지</h2>
      <label htmlFor="id">아이디</label>
      <input
        placeholder="아이디를 5자 이상 입력해주세요."
        id="id"
        onChange={(e) => {
          authBtn();
          handleSignUpState(e);
        }}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        placeholder="비밀번호를 8자 이상 입력해주세요."
        id="password"
        onChange={(e) => {
          authBtn();
          handleSignUpState(e);
        }}
      />
      <button
        type="submit"
        disabled={btnDisabled}
        onClick={(e) => {
          handleSignup(e);
        }}
      >
        회원가입
      </button>
    </SignUpBox>
  );
};

export default SignUp;
