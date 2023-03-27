import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { boardData } from "../../store/boardSlice";
import "../../style/board.scss";

const BDitem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const boardlist = useSelector((state) => state.board.list);
  const dispatch = useDispatch();
  const filterItem = boardlist.filter((it) => parseInt(it.id) === parseInt(id));

  useEffect(() => {
    dispatch(boardData());
  }, [id]);

  return (
    <section>
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
        <div className="itembtn">
          <button>수정하기</button>
          <button>삭제하기</button>
          <button
            onClick={() => {
              navigate("/board");
            }}
          >
            목록으로
          </button>
        </div>
      </div>
    </section>
  );
};

export default BDitem;
