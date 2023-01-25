import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 100px;
  margin: 0 auto;
  line-height: 100px;
  border-bottom: 1px solid #ddd;

  .container {
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
  ul {
    display: flex;
    gap: 30px;
    font-size: 19px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle className="Header">
      <div className="container">
        <h1>
          <NavLink to="/">Go Camping</NavLink>
        </h1>
        <ul className="gnb">
          <li>
            <NavLink to="/region">지역별</NavLink>
          </li>
          <li>
            <NavLink>테마별</NavLink>
          </li>
          <li>
            <NavLink>공지시항</NavLink>
          </li>
          <li>
            <NavLink>문의사항</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink>로그인</NavLink>
          </li>
          <li>
            <NavLink>회원가입</NavLink>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  );
};

export default Header;
