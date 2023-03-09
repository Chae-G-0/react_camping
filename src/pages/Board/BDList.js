import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/board.scss";

const BDList = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const list = axios
      .get("http://localhost:8080/api/board")
      .then((res) => setBoardList(res.data));
  }, []);
  console.log(boardList);
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
                <td className="no">1</td>
                <td className="tit">
                  <Link to="">{ it.title}</Link>
                </td>
                <td className="name">작성자</td>
                <td className="date">날짜</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BDList;
