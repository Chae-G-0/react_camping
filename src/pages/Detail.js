import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addItem } from "../store/mypageSlice";
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
  const dispatch = useDispatch();

  const handleBookmark = () => {
    dispatch(addItem(detail[0].facltNm));
    alert("즐겨찾기에 저장됐습니다.")
  };
  
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
                <button onClick={handleBookmark}>즐겨찾기 등록</button>
              </div>
            </div>
            <div className="facInfo">
              <h4>캠핑장 시설 정보</h4>
              <p>{it.sbrsCl}</p>
              <p>화장실 개수 : {it.toiletCo}</p>
              <p>애견 동반 : {it.animalCmgCl}</p>
              <p>
                개인 트레일러 사용 :
                {it.trlerAcmpnyAt === "Y" ? "가능" : "불가능"}
              </p>
              <p>
                개인 카라반 사용 :{it.caravAcmpnyAt === "Y" ? "가능" : "불가능"}
              </p>
              <p>소화기 개수 :{it.extshrCo}</p>
            </div>
            <div className="siteBottom">
              <div className="bottom">
                <span>잔디</span>
                <p>{it.siteBottomCl1}</p>
              </div>
              <div className="bottom">
                <span>파쇄석</span>
                <p>{it.siteBottomC2}</p>
              </div>
              <div className="bottom">
                <span>테크</span>
                <p>{it.siteBottomCl3}</p>
              </div>
              <div className="bottom">
                <span>자갈</span>
                <p>{it.siteBottomCl4}</p>
              </div>
              <div className="bottom">
                <span>맨흙</span>
                <p>{it.siteBottomCl5}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Detail);
