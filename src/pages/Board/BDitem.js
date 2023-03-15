import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { boardData } from "../../store/boardSlice";
import "../../style/board.scss";

const BDitem = () => {
  const { id } = useParams();
  const boardlist = useSelector((state) => state.boardSlice.list);
  const dispatch = useDispatch();
  const filterItem = [...boardlist].filter(
    (it) => parseInt(it.id) === parseInt(id)
  );

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
        </div>
      </div>
    </section>
  );
};

export default BDitem;
