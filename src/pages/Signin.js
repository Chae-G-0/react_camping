import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInBox = styled.div`
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

const Signin = () => {
  const navigate = useNavigate();
  const idInput = useRef();
  const [id, setId] = useState("");
  const handleSubmit = () => {
    if (id.length < 1) {
      idInput.current.focus();
      return;
    }
    navigate("/");
  };
  return (
    <SignInBox>
      <p>로그인 페이지 입니다.</p>
      <label htmlFor="id">아이디</label>
      <input
        ref={idInput}
        data-testid="email-input"
        placeholder="아이디를 입력해 주세요."
        id="id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요."
        id="password"
      />
      <button
        data-testid="signup-button"
        onClick={() => {
          handleSubmit();
        }}
      >
        로그인
      </button>
    </SignInBox>
  );
};

export default Signin;
