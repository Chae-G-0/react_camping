import React from "react";
import '../style/mypage.scss'

const Mypage = () => {
  return (
    <section className="Mypage">
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
    </section>
  );
};

export default Mypage;