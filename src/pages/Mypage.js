import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteItem } from "../store/mypageSlice";
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
  const userId = localStorage.getItem("userId");
  const isLoginState = useSelector((state) => state.login.isLoginState);
  const bookMark = useSelector((state) => state.mypage);
  const dispatch = useDispatch();

  return (
    <section className="Mypage">
      {isLoginState ? (
        <div className="inner">
          <h2>{userId}님의 마이페이지 입니다</h2>
          <div className="flexBox">
            <div className="mark">
              <h3>즐겨찾기</h3>
              <div>
                {bookMark.map((it, idx) => {
                  return (
                    <div key={idx} className="bookMark">
                      <p>{it}</p>
                      <button
                        onClick={() => {
                          window.confirm("즐겨찾기를 해제하시겠습니까?");
                          dispatch(deleteItem(it));
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  );
                })}
              </div>
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
