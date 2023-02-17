import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../style/Detail.scss";

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
  }, [id]);
  return (
    <div className="Detail">
      {detailInfo.map((it) => {
        return (
          <div className="infoBox" key={it.contentId}>
            <div className="topBox">
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
                <table>
                  <tbody>
                    <tr>
                      <th>주소</th>
                      <td>{it.addr1}</td>
                    </tr>
                    <tr>
                      <th>전화번호</th>
                      <td>{it.tel}</td>
                    </tr>
                    <tr>
                      <th>캠핑장 환경</th>
                      <td>{it.lctCl}</td>
                    </tr>
                    <tr>
                      <th>홈페이지</th>
                      <td>
                        <a href={it.homepage} target="_blank">
                          {it.homepage}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>예약 방법</th>
                      <td>{it.resveCl}</td>
                    </tr>
                    <tr>
                      <th>운영 기간</th>
                      <td>{it.operPdCl}</td>
                    </tr>
                    <tr>
                      <th>운영일</th>
                      <td>{it.operDeCl}</td>
                    </tr>
                    <tr>
                      <th>주변시설</th>
                      <td>{it.posblFcltyCl}</td>
                    </tr>
                  </tbody>
                </table>
                <button>즐겨찾기 등록</button>
              </div>
            </div>
            <div className="facInfo">
              <h4>캠핑장 부대시설 정보</h4>
              <p>{it.sbrsCl}</p>
              <p>애견 동반 : {it.animalCmgCl}</p>
              <p>
                개인 트레일러 사용 :
                {it.trlerAcmpnyAt === "Y" ? "가능" : "불가능"}
              </p>
              <p>
                개인 카라반 사용 :{it.caravAcmpnyAt === "Y" ? "가능" : "불가능"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Detail);
