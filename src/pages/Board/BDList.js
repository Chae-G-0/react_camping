import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { boardData } from "../../store/boardSlice";
import "../../style/board.scss";

const BDList = () => {
  const boardList = useSelector((state) => state.board.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardData());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th className="num">번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
        </tr>
      </thead>
      {boardList.length < 1 ? (
        <tbody className="non">
          <tr>
            <td colSpan={4}>등록된 게시글이 없습니다.</td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {boardList.map((it, idx) => {
            return (
              <tr key={idx}>
                <td>{it.id}</td>
                <td className="tit">
                  <Link to={`/boarditem/${it.id}`}>{it.title}</Link>
                </td>
                <td>작성자</td>
                <td>{it.date}</td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default BDList;
