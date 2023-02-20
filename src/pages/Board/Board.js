import React from "react";
import BDList from "./BDList";
import "../../style/board.scss"
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <section className="Board">
      <div className="inner">
        <h2>게시판</h2>
        <BDList />
        <Link to="/write">
          글쓰기
        </Link>
      </div>
    </section>
  );
};

export default Board;
