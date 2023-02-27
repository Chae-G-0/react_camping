import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import authData from "../../store/loginSlice";
const SignInBox = styled.div`
  width: 400px;
  margin: 0 auto;
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

const SignIn = () => {
  const dispatch = useDispatch();
  const LOGIN = useSelector((state) => state.login.isLoginState);
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
  const handleLogin = async (e) => {
    e.preventDefault();
    const userInfo = {
      id: loginForm.id,
      password: loginForm.password,
    };
    try {
      const result = axios
        .post("/signin", userInfo)
        .catch((err) => console.log(err.response.data));
      localStorage.setItem("userState", result.data.ACCESS_TOKEN);
      dispatch(authData(result.data.ACCESS_TOKEN));
      dispatch(LOGIN())
      console.log("login!!!");
    } catch (err) {
      return console.log(err);
    }
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
    handleLogin();
    navigate("/");
  };
  return (
    <SignInBox>
      <h2>로그인 페이지</h2>
      <label htmlFor="id">아이디</label>
      <input
        id="id"
        ref={idInput}
        placeholder="이메일를 입력해 주세요."
        onChange={(e) => {
          handleLogInState(e);
          console.log();
        }}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        ref={pwInput}
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={(e) => {
          handleLogInState(e);
        }}
      />
      <button
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
