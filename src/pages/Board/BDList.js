import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { boardData } from "../../store/boardSlice";
import "../../style/board.scss";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PageIdx = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 50px 0 0 0;

  .prev,
  .next {
    line-height: 0;
  }

  li {
    a {
      border-radius: 50%;
      border: 1px solid #ddd;
      padding: 5px 10px;
      border: none;
      background: none;
      cursor: pointer;

      :hover {
        background: #ddd;
      }
    }
  }
`;

const BDList = () => {
  const boardList = useSelector((state) => state.board.list);
  const boardView = [...boardList].reverse();
  const dispatch = useDispatch();

  const [item, setItem] = useState(10);
  const [itemList, setItemList] = useState();
  const [pageNum, setPageNum] = useState([0, item]);
  const [listNum, setListNum] = useState([0, itemList]);

  const toPrev = () => {
    setPageNum((prev) => [...prev.map((it) => it - item)]);
  };

  const toNext = () => {
    setPageNum((prev) => [...prev.map((it) => it + item)]);
  };

  const toIdx = (idx) => {
    setPageNum([0, item].map((it) => it + item * idx));
  };

  useEffect(() => {
    dispatch(boardData());
  }, [dispatch]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="num">번호</th>
            <th className="title">제목</th>
            <th>작성자</th>
            <th>작성일자</th>
          </tr>
        </thead>
        {boardList.length < 1 ? (
          <tbody className="non">
            <tr>
              <td colSpan={4}>등록된 게시글이 없습니다.</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {boardView
              .map((it) => {
                return (
                  <tr key={it.id}>
                    <td>{it.id}</td>
                    <td className="tit">
                      <Link to={`/boarditem/${it.id}`}>{it.title}</Link>
                    </td>
                    <td>{it.author}</td>
                    <td>{it.date}</td>
                  </tr>
                );
              })
              .slice(pageNum[0], pageNum[1])}
          </tbody>
        )}
      </table>
      <PageIdx className="pageIdx">
        <li className="prev" onClick={() => (pageNum[0] ? toPrev() : null)}>
          <a>
            <FiChevronLeft />
          </a>
        </li>
        {Array.from(
          { length: Math.ceil(boardList.length / item) },
          (v, k) => k + 1
        )
          .map((it, idx) => {
            return (
              <li key={idx}>
                <a
                  onClick={() => {
                    toIdx(idx);
                  }}
                >
                  {it}
                </a>
              </li>
            );
          })
          .slice(listNum[0], listNum[1])}
        <li
          className="next"
          onClick={() => (pageNum[1] < boardList.length ? toNext() : null)}
        >
          <a>
            <FiChevronRight />
          </a>
        </li>
      </PageIdx>
    </>
  );
};

export default BDList;
