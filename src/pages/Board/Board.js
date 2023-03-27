import React from "react";
import BDList from "./BDList";
import "../../style/board.scss";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();

  const handleWrite = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      return navigate("/write");
    } else {
      alert("로그인 후 이용할 수 있습니다.");
      return;
    }
  };

  return (
    <section className="Board">
      <div className="inner">
        <h2>게시판</h2>
        <BDList />
        <div className="btn">
          <button onClick={handleWrite}>글쓰기</button>
        </div>
      </div>
    </section>
  );
};

export default Board;