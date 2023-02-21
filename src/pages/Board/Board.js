import React from "react";
import BDList from "./BDList";
import "../../style/board.scss";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();

  return (
    <section className="Board">
      <div className="inner">
        <h2>게시판</h2>
        <BDList />
        <div className="btn">
          <button
            onClick={() => {
              navigate("/write");
            }}
          >
            글쓰기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Board;
