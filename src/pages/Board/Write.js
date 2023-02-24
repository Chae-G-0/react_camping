import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/board.scss";

const Write = () => {
  const titleInput = useRef();
  const contentInput = useRef();
  const navigate = useNavigate();
  const [boardForm, setBoardForm] = useState({
    title: "",
    content: "",
  });

  const handleBoardState = (e) => {
    setBoardForm({
      ...boardForm,
      [e.target.name]: e.target.value,
    });
  };
  
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
                <input
                  name="title"
                  ref={titleInput}
                  onChange={(e) => {
                    handleBoardState(e);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea
                  name="content"
                  ref={contentInput}
                  onChange={(e) => {
                    handleBoardState(e);
                  }}
                />
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
