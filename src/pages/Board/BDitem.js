import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../style/board.scss";

const BDitem = () => {
  const { id } = useParams();
  const boardlist = useSelector((state) => state.boardSlice.list);
  const dispatch = useDispatch();
  const filterItem = [...boardlist].filter((it) => parseInt(it.id) === parseInt(id));
  useEffect(() => {
    dispatch(boardlist);
  }, [id]);
  console.log(filterItem)
  return (
    <div className="BDitem">
      {filterItem.map((it) => {
        return (
          <div key={it.id}>
            <h3>{it.title}</h3>
            <p>{it.content}</p>
          </div>
        );
      })}
      <button>수정하기</button>
      <button>삭제하기</button>
    </div>
  );
};

export default BDitem;
