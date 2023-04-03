import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NoImg = styled.div`
  width: 380px;
  height: 255px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  }
`;

const PageIdx = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 50px 0 100px 0;

  .prev,
  .next {
    border: none;
    background: none;
    line-height: 0;
    cursor: pointer;
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

const Camp = ({ campingData }) => {
  const { doNm } = useParams();
  const [locate, setLocate] = useState([]);
  const filterDt = [...campingData].filter((it) => it.doNm === doNm);

  const [item, setItem] = useState(12);
  const [itemList, setItemList] = useState();
  const [pageNum, setPageNum] = useState([0, item]);
  const [listNum, setListNum] = useState([0, itemList]);
  const listRef = useRef(0);

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
    setLocate(filterDt);
  }, [doNm]);

  return (
    <div>
      {doNm ? (
        <>
          <div className="camp">
            {locate
              .map((it, idx) => {
                return (
                  <div className="campBox" key={idx}>
                    <Link to={`/detail/${it.contentId}`}>
                      <figure>
                        {it.firstImageUrl.length > 1 ? (
                          <img src={it.firstImageUrl} alt="" />
                        ) : (
                          <NoImg>등록된 사진이 없습니다.</NoImg>
                        )}
                      </figure>
                      <h3>{it.facltNm}</h3>
                      <p>{it.addr1}</p>
                    </Link>
                  </div>
                );
              })
              .slice(pageNum[0], pageNum[1])}
          </div>
          <PageIdx className="pageIdx">
            <button
              className="prev"
              onClick={() => (pageNum[0] ? toPrev() : null)}
            >
              <FiChevronLeft />
            </button>
            {Array.from(
              { length: Math.ceil(locate.length / item) },
              (v, k) => k + 1
            )
              .map((it, idx) => {
                return (
                  <li key={idx}>
                    <a
                      ref={listRef}
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
            <button
              className="next"
              onClick={() => (pageNum[1] < locate.length ? toNext() : null)}
            >
              <FiChevronRight />
            </button>
          </PageIdx>
        </>
      ) : (
        <>
          <div className="camp">
            {campingData
              .map((it, idx) => {
                return (
                  <div className="campBox" key={idx}>
                    <Link to={`/detail/${it.contentId}`}>
                      <figure>
                        {it.firstImageUrl.length > 1 ? (
                          <img src={it.firstImageUrl} alt="" />
                        ) : (
                          <NoImg>등록된 사진이 없습니다.</NoImg>
                        )}
                      </figure>
                      <h3>{it.facltNm}</h3>
                      <p>{it.addr1}</p>
                    </Link>
                  </div>
                );
              })
              .slice(pageNum[0], pageNum[1])}
          </div>
          <PageIdx className="pageIdx">
            <button className="prev" onClick={toPrev}>
              <FiChevronLeft />
            </button>
            {Array.from(
              { length: Math.ceil(campingData.length / item) },
              (v, k) => k + 1
            )
              .map((it, idx) => {
                return (
                  <li key={idx}>
                    <a
                      ref={listRef}
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
            <button className="next" onClick={toNext}>
              <FiChevronRight />
            </button>
          </PageIdx>
        </>
      )}
    </div>
  );
};

export default React.memo(Camp);
