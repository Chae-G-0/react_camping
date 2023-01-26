import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const NoImg = styled.div`
  width: 380px;
  height: 255px;
  border: 1px solid #ddd;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Camp = ({ campingData }) => {
  const { doNm } = useParams();
  const [locate, setLocate] = useState([]);
  const filter = [...campingData].filter((it) => doNm === it.doNm);
  useEffect(() => {
    setLocate(filter);
  }, [doNm, campingData]);

  return (
    <div>
      {locate && (
        <div className="container">
          {[...campingData].map((it, idx) => {
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
                  <p>{it.tel}</p>
                  <p>{it.doNm}</p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Camp;
