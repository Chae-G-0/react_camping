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
  const _id = filterItem[0]._id;
  const title = filterItem[0].title;
  const content = filterItem[0].content;
  const author = filterItem[0].author;
  const userId = localStorage.getItem("userId")

  const titleEditInput = useRef();
  const contentEditInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const editInfo = [_id, editTitle, editContent];

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
    window.confirm("게시글을 수정하시겠습니까?");
    dispatch(boardEdit(editInfo));
    toggleEdit();
  };

  // 수정 취소
  const handleQuitEdit = () => {
    setIsEdit(false);
    setEditTitle(title);
    setEditContent(content);
  };

  // 게시글 삭제
  const handleDelete = () => {
    window.confirm("해당 게시글을 삭제하시겠습니까?");
    dispatch(boardDelete(_id));
    navigate("/board", { replace: true });
  };

  useEffect(() => {
    dispatch(boardData());
  }, [id]);

  return (
    <section>
      {isEdit ? (
        <div className="inner EditItem">
          <div className="tit">
            <input
              ref={titleEditInput}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div className="content">
            <input
              ref={contentEditInput}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          </div>
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
      {author === userId ? (
        isEdit ? (
          <div className="itembtn">
            <button onClick={handleEdit}>수정완료</button>
            <button onClick={handleQuitEdit}>수정취소</button>
          </div>
        ) : (
          <div className="itembtn">
            <button onClick={toggleEdit}>수정하기</button>
            <button onClick={handleDelete}>삭제하기</button>
            <button
              onClick={() => {
                navigate("/board");
              }}
            >
              목록으로
            </button>
          </div>
        )
      ) : (
        <div className="itembtn">
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
