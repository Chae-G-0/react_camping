import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ISLOGIN } from "../../store/loginSlice";

const SignInBox = styled.div`
  width: 400px;
  min-height: calc(100vh - 160px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    font-size: 21px;
    color: #777;
    margin: 0 0 30px 0;
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
  const location = useLocation();
  const navigate = useNavigate();
  const idInput = useRef();
  const pwInput = useRef();
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
    if (location.state !== null) {
      navigate(location.state.locate)
    } else {
      navigate("/", { replace: true });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userInfo = {
      id: loginForm.id,
      password: loginForm.password,
    };
    try {
      const res = await axios.post("/api/signin", userInfo);
      localStorage.setItem("access_token", res.data.ACCESS_TOKEN);
      localStorage.setItem("userId", res.data.id);
      if (res.status === 200) {
        dispatch(ISLOGIN(true));
        handleSubmit();
        return;
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("존재하지 않는 아이디입니다.");
        return;
      }
      if (error.response && error.response.status === 400) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
    }
  };

  return (
    <SignInBox>
      <h2>로그인 페이지</h2>
      <label htmlFor="id">아이디</label>
      <input
        id="id"
        ref={idInput}
        placeholder="아이디를 입력해 주세요."
        onChange={(e) => {
          handleLogInState(e);
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
        onClick={(e) => {
          handleLogin(e);
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
