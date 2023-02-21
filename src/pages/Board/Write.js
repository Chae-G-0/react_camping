import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/board.scss";

const Write = () => {
  const navigate = useNavigate();
  return (
    <section className="Write">
      <div className="inner BoardList">
        <table className="BoardTable">
          <thead>
            <tr>
              {/* colSpan={2} : 열 합치기 */}
              <th colSpan={2}>
                <h3>글쓰기</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <input name="title" />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea name="content" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn">
          <button
            onClick={() => {
              navigate("/board");
            }}
          >
            등록하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Write;
