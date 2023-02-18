import React from "react";
import { NavLink } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #ddd;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    flex: 1;
    text-align: center;
    font-size: 27px;
    font-weight: 700;
  }
  .gnb {
    flex: 1;
    display: flex;
    gap: 30px;
    font-size: 17px;
  }
  .auth {
    flex: 1;
    text-align: end;
  }
`;

const Header = () => {
  return (
    <HeaderStyle className="Header">
      <div className="container">
        <ul className="gnb">
          <li>
            <NavLink to="/region">지역별</NavLink>
          </li>
          <li>
            <NavLink to="/thema">테마별</NavLink>
          </li>
          <li>
            <NavLink to="/notice">공지시항</NavLink>
          </li>
          <li>
            <NavLink>문의사항</NavLink>
          </li>
        </ul>
        <h1>
          <NavLink to="/">Camping</NavLink>
        </h1>
        <ul className="auth">
          <li>
            <NavLink to="/signin">{FiUserPlus}</NavLink>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  );
};

export default Header;
