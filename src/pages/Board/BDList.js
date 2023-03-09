import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/board.scss";

const BDList = () => {
  const [boardList, setBoardList] = useState()
  useEffect(() => {
    const list = axios
      .get("http://localhost:8080/api/board")
      .then((res) => console.log(res.data));
    console.log(list)
  }, []);
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
          <tr>
            <td className="no">1111</td>
            <td className="tit">
              <Link to="">제목</Link>
            </td>
            <td className="name">작성자</td>
            <td className="date">날짜</td>
          </tr>
        </tbody>
      </table>
      {/* <div>
        {boardList.map(it => {
          return (
            <div>
              {it.title}
            </div>
          )
        })}
      </div> */}
    </div>
  );
};

export default BDList;
