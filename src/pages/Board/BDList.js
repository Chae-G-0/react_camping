import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { boardData } from "../../store/boardSlice";
import "../../style/board.scss";

const BDList = () => {
  const boardList = useSelector((state) => state.boardSlice.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardData());
  }, [dispatch]);
  
  return (
    <div className="BoardList">
      <table>
        <thead>
          <tr>
            <th className="no">번호</th>
            <th className="tit">제목</th>
            <th className="name">작성자</th>
            <th className="date">날짜</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((it, idx) => {
            return (
              <tr key={idx}>
                <td className="no">{it.id}</td>
                <td className="tit">
                  <Link to={`/boarditem/${it.id}`}>{it.title}</Link>
                </td>
                <td className="name">작성자</td>
                <td className="date">{it.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BDList;
