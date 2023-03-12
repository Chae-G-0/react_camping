import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/board.scss";

const Write = () => {
  const titleInput = useRef();
  const contentInput = useRef();
  const boardId = useRef(1);
  const navigate = useNavigate();
  const [boardForm, setBoardForm] = useState({
    id: boardId.current,
    title: "",
    content: "",
  });

  const handleBoardState = (e) => {
    setBoardForm({
      ...boardForm,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleDateString(),
    });
  };

  const handleBoard = async () => {
    const boardInfo = {
      id: boardForm.id,
      title: boardForm.title,
      content: boardForm.content,
      date: boardForm.date,
    };
    try {
      const res = await axios.post("/api/board", boardInfo);
      if (res.status === 200) {
        console.log("등록 됨!");
        alert("게시글이 등록되었습니다.");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (boardForm.title.length < 1) {
      titleInput.current.focus();
      return;
    }
    if (boardForm.content.length < 1) {
      contentInput.current.focus();
      return;
    }
    handleBoard();
    boardId.current++;
    return navigate("/board", { replace: true });
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
            onClick={(e) => {
              handleSubmit(e);
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
