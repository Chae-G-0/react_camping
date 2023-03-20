import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "../style/mypage.scss";

const NotLogin = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
  color: #707070;
`;

const Mypage = () => {
  const isLoginState = useSelector((state) => state.login.isLoginState);
  return (
    <section className="Mypage">
      {isLoginState ? (
        <div className="inner">
          <h2>name님의 마이페이지 입니다</h2>
          <div className="flexBox">
            <div className="mark">
              <h3>즐겨찾기</h3>
            </div>
            <div className="myWrite">
              <h3>내가 쓴 글</h3>
            </div>
          </div>
        </div>
      ) : (
        <NotLogin>로그인 후 이용할 수 있는 페이지입니다.</NotLogin>
      )}
    </section>
  );
};

export default Mypage;
