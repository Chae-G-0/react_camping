import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ISLOGIN } from "../store/loginSlice";

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
    display: flex;
    gap: 30px;
    flex: 1;
    justify-content: flex-end;

    .logout {
      cursor: pointer;
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoginState = useSelector((state) => state.login.isLoginState);

  const handlelogout = () => {
    localStorage.removeItem("access_token");
    dispatch(ISLOGIN(false));
    alert("로그아웃 되었습니다.");
    navigate("/", { replace: true });
  };

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
            <NavLink to="/board">게시판</NavLink>
          </li>
        </ul>
        <h1>
          <NavLink to="/">Camping</NavLink>
        </h1>
        {isLoginState.payload ? (
          <ul className="auth">
            <li>
              <NavLink to="/mypage">마이페이지</NavLink>
            </li>
            <li
              className="logout"
              onClick={() => {
                handlelogout();
              }}
            >
              로그아웃
            </li>
          </ul>
        ) : (
          <ul className="auth">
            <li>
              <NavLink to="/signin">로그인</NavLink>
            </li>
            <li>
              <NavLink to="/signup">회원가입</NavLink>
            </li>
          </ul>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
