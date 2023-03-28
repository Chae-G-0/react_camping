import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { boardData, boardDelete, boardEdit } from "../../store/boardSlice";
import "../../style/board.scss";

const BDitem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boardlist = useSelector((state) => state.board.list);
  const filterItem = boardlist.filter((it) => it.id === parseInt(id));
  const title = filterItem[0].title;
  const content = filterItem[0].content;

  const titleEditInput = useRef();
  const contentEditInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const toggleEdit = () => setIsEdit(!isEdit);

  // 게시글 수정
  const handleEdit = () => {
    if (editTitle.length < 1) {
      titleEditInput.current.focus();
      return;
    }
    if (editContent.length < 1) {
      contentEditInput.current.focus();
      return;
    }
    dispatch(boardEdit());
    toggleEdit();
  };

  // 수정 취소
  const handleQuitEdit = () => {
    setIsEdit(false);
    setEditTitle(title);
    setEditContent(content);
  };

  useEffect(() => {
    dispatch(boardData());
  }, [id]);

  return (
    <section>
      {isEdit ? (
        <div className="inner Edit">
          <input ref={titleEditInput} />
          <input ref={contentEditInput} />
        </div>
      ) : (
        <div className="inner BDitem">
          {filterItem.map((it) => {
            return (
              <div key={it.id} className="item">
                <div className="top">
                  <h3>{it.title}</h3>
                  <span>{it.date}</span>
                </div>
                <p>{it.content}</p>
              </div>
            );
          })}
        </div>
      )}
      {isEdit ? (
        <div className="itembtn">
          <button onClick={handleEdit}>수정완료</button>
          <button onClick={handleQuitEdit}>수정취소</button>
        </div>
      ) : (
        <div className="itembtn">
          <button onClick={toggleEdit}>수정하기</button>
          <button onClick={() => dispatch(boardDelete())}>삭제하기</button>
          <button
            onClick={() => {
              navigate("/board");
            }}
          >
            목록으로
          </button>
        </div>
      )}
    </section>
  );
};

export default BDitem;
