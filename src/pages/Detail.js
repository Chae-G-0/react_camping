import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../Detail.scss"

const NoImg = styled.div`
  flex: 1;
  width: 380px;
  height: 255px;
  border: 1px solid #ddd;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = ({ campingData }) => {
  const { id } = useParams();
  const [detailInfo, setDetailInfo] = useState([]);
  const detail = campingData.filter(
    (it) => parseInt(id) === parseInt(it.contentId)
  );
  useEffect(() => {
    setDetailInfo(detail);
  }, []);
  return (
    <div className="Detail">
      {detailInfo.map(it => {
        return (
          <div className="infoBox" key={it.contentId}>
            <figure>
              {it.firstImageUrl.length > 1 ? (
                <img src={it.firstImageUrl} alt="" />
              ) : (
                <NoImg>등록된 사진이 없습니다.</NoImg>
              )}
            </figure>
            <div className="textBox">
              <h3>{it.facltNm}</h3>
              <span>{it.lineIntro}</span>
              <p>{it.addr1}</p>
              <p>{it.tel}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
